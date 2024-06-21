import { defineStore } from "pinia";
import axios from "axios";
import { ref, computed } from "vue";
import type { MovieTypes } from "@/types";

const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=8eb7dbbe";

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref<MovieTypes[]>([]);
  const searchQuery = ref<string>("");
  const currentPage = ref<number>(1);
  const itemsPerPage = ref<number>(9);

  const isMenuOpen = ref<boolean>(false);
  const selectedMenu = ref<string | null>(null);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const selectMenu = (menu: string) => {
    selectedMenu.value = menu;
  };

  const filteredMovies = computed(() => {
    return movies.value.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  const paginatedMovies = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredMovies.value.slice(start, end);
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredMovies.value.length / itemsPerPage.value);
  });

  const fetchMovie = async () => {
    try {
      const response = await axios.get<MovieTypes>(apiUrl);
      const movie = response.data;
      movies.value = Array(27).fill(movie);
    } catch (error) {
      console.error("Failed to fetch movie:", error);
    }
  };

  const setSearchQuery = (query: string) => {
    searchQuery.value = query;
    currentPage.value = 1;
  };

  const setCurrentPage = (page: number) => {
    currentPage.value = page;
  };

  return {
    movies,
    searchQuery,
    currentPage,
    itemsPerPage,
    isMenuOpen,
    filteredMovies,
    paginatedMovies,
    totalPages,
    selectMenu,
    toggleMenu,
    selectedMenu,
    fetchMovie,
    setSearchQuery,
    setCurrentPage,
  };
});
