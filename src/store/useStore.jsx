import { create } from "zustand";

export const useStore = create((set) => ({
  titles: [],
  loading: false,
  currentPage: 1,
  searchTerm: "",
  searchResults: [],
  error: null,

  setLoading: () => set((state) => ({ loading: state.loading })),
  incrementPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  decrementPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm }),
  setSearchResults: (newSearchRestuls) =>
    set({ searchResults: newSearchRestuls }),
setError: () => set((state) => ({error: !state.error})),

  setTitleState: async (page) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://project-mongo-api-z0mw.onrender.com/titles?page=${page}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch titles");
      }
      const data = await response.json();
      set({ titles: data });
      console.log(data);
      set ({ searchTerm : "" })
      set ({ searchResults: [] })
    } catch (error) {
      console.error(error.message);
    } finally {
      set({ loading: false });

    }
  },
}));
