<script setup lang="ts">
import Sidebar from "@/components/ui/Sidebar.vue";
import { useMoviesStore } from "@/stores/moviesStore";
import Pagination from "@/components/ui/Pagination.vue";

const store = useMoviesStore();
const paginatedMovies = computed(() => store.paginatedMovies);

onMounted(() => {
  store.fetchMovie();
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="flex w-full h-full pt-[70px]">
    <Sidebar />
    <div class="bg-[#222B31] w-full flex flex-col items-center pt-8">
      <div class="grid grid-cols-3 items-center gap-5 md:gap-12 px-5 md:px-0">
        <div
          v-for="movie in paginatedMovies"
          :key="movie.imdbID"
          @click="$router.push(`/${movie.imdbID}`)"
          class="cursor-pointer"
        >
          <NuxtImg :src="movie.Poster" class="rounded-xl" width="220" />
          <h1 class="text-neutral-300 mt-3 text-sm max-w-[220px] text-center">
            {{ movie.Title }}
          </h1>
        </div>
      </div>
      <div class="my-12">
        <Pagination />
      </div>
    </div>
  </div>
</template>
