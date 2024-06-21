<script setup lang="ts">
import Sidebar from "@/components/ui/Sidebar.vue";
import { useMoviesStore } from "@/stores/moviesStore";

const store = useMoviesStore();
const movie = computed(() => store.movies[0]);

onMounted(() => {
  store.fetchMovie();
});

definePageMeta({
  layout: "movie-id",
});
</script>

<template>
  <div class="flex w-full h-full pt-[65px]">
    <Sidebar />
    <div
      class="flex flex-col bg-[#222B31] w-full px-6 md:px-8 pt-8 pb-20"
      v-if="movie"
    >
      <h1 class="text-neutral-300 mb-3 text-lg md:text-xl font-bold">
        {{ movie.Title }} &nbsp;|&nbsp; ({{ movie.Rated }})
      </h1>
      <div class="flex">
        <NuxtImg :src="movie.Poster" width="400" class="hidden md:block" />
        <NuxtImg :src="movie.Poster" width="200" class="md:hidden" />
        <div
          class="flex flex-col *:text-neutral-300 ml-4 md:mr-0 text-xs md:text-base"
        >
          <p>{{ movie.Title }}</p>
          <p>Release Date: {{ movie.Released }}</p>
          <p>Language: {{ movie.Language }}</p>
          <p>Genre: {{ movie.Genre }}</p>
          <p>Cast & Crew: {{ movie.Actors }} {{ movie.Writer }}</p>
          <p>Director: {{ movie.Director }}</p>
          <p>Length: {{ movie.Runtime }}</p>
          <h1 class="my-5 text-xl font-bold hidden md:block">SYNOPSIS</h1>
          <p class="hidden md:block">{{ movie.Plot }}</p>
          <div
            class="flex *:bg-[#C0222E] gap-3 mt-5 *:p-2 md:*:py-3 md:*:px-5 text-xs *:text-neutral-200 *:rounded-2xl"
          >
            <button>Buy Ticket</button>
            <button>Watch Trailer</button>
          </div>
        </div>
      </div>
      <h1 class="my-5 text-xl font-bold md:hidden text-neutral-300">
        SYNOPSIS
      </h1>
      <p class="md:hidden text-neutral-300 text-justify">{{ movie.Plot }}</p>
      <hr class="text-neutral-300 mt-8 md:mt-12" />
      <h1 class="text-neutral-300 font-bold text-xl my-10">Now Playing</h1>
      <div class="gap-14 hidden md:flex">
        <NuxtImg
          :src="movie.Poster"
          width="230"
          @click="$router.push(`/${movie.imdbID}`)"
        />
        <NuxtImg
          :src="movie.Poster"
          width="230"
          @click="$router.push(`/${movie.imdbID}`)"
        />
        <NuxtImg
          :src="movie.Poster"
          width="230"
          @click="$router.push(`/${movie.imdbID}`)"
        />
      </div>
      <div class="gap-6 flex md:hidden">
        <NuxtImg
          :src="movie.Poster"
          width="150"
          @click="$router.push(`/${movie.imdbID}`)"
        />
        <NuxtImg
          :src="movie.Poster"
          width="150"
          @click="$router.push(`/${movie.imdbID}`)"
        />
      </div>
    </div>
  </div>
</template>
