<script setup>
import { Icon } from "@iconify/vue";
import SearchBar from "@/components/ui/SearchBar.vue";
import { useMoviesStore } from "@/stores/moviesStore";

const store = useMoviesStore();

const isMenuOpen = computed(() => store.isMenuOpen);
const toogleMenu = computed(() => store.toggleMenu);

const icon = computed(() =>
  isMenuOpen.value ? "ion:close-outline" : "ion:menu-outline"
);
</script>

<template>
  <div
    class="bg-[#C0222E] gap-x-5 fixed top-0 justify-between w-full flex items-center px-5 md:px-10 py-4"
  >
    <NuxtLink
      class="md:text-2xl sm:text-base font-bold text-neutral-200 italic"
      to="/"
    >
      CINEMAKUY
    </NuxtLink>
    <SearchBar />
    <div class="gap-x-5 hidden md:flex">
      <h1 class="text-[#2aa6cf] font-bold text-xl">IMAX</h1>
      <NuxtImg src="/images/dolbyatmos.png" width="100" />
    </div>
    <Icon
      :icon="icon"
      width="30"
      class="md:hidden text-white"
      @click="toogleMenu"
    />
  </div>
</template>
