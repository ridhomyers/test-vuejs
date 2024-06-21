<script setup>
import { useMoviesStore } from "@/stores/moviesStore";

const store = useMoviesStore();

const currentPage = computed(() => store.currentPage);
const totalPages = computed(() => store.totalPages);

const nextPage = () => {
  if (store.currentPage < store.totalPages) {
    store.setCurrentPage(store.currentPage + 1);
  }
};

const previousPage = () => {
  if (store.currentPage > 1) {
    store.setCurrentPage(store.currentPage - 1);
  }
};
</script>

<template>
  <div class="flex justify-center items-center gap-5">
    <button
      @click="previousPage"
      :disabled="currentPage === 1"
      class="bg-[#C0222E] px-3 py-2 rounded-lg text-neutral-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Sebelumnya
    </button>
    <span class="text-neutral-300">
      Page {{ currentPage }} of {{ totalPages }}</span
    >
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="bg-[#C0222E] px-3 py-2 rounded-lg text-neutral-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Selanjutnya
    </button>
  </div>
</template>
