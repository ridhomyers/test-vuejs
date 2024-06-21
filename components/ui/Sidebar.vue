<script setup lang="ts">
import { useMoviesStore } from "@/stores/moviesStore";

const store = useMoviesStore();

const isMenuOpen = computed(() => store.isMenuOpen);
const selectedMenu = computed(() => store.selectedMenu);
const selectMenu = (menu: string) => store.selectMenu(menu);

const menuClass = (menu: string) => {
  return selectedMenu.value === menu ? "bg-[#222B31]" : "bg-black";
};

const sidebarItem = [
  {
    title: "Now Playing",
  },
  {
    title: "Coming Soon",
  },
  {
    title: "Theater",
  },
  {
    title: "Promotion",
  },
  {
    title: "Informations",
  },
];
</script>

<template>
  <div
    class="*:py-5 *:pl-5 px-4 pt-5 *:rounded-full hidden md:flex flex-col bg-black w-[25vw] min-h-full *:text-neutral-300 left-0 *:cursor-pointer"
  >
    <NuxtLink
      v-for="item in sidebarItem"
      :key="item.title"
      @click="selectMenu(item.title)"
      :class="menuClass(item.title)"
    >
      {{ item.title }}
    </NuxtLink>
  </div>
  <div
    v-if="isMenuOpen"
    class="md:hidden flex flex-col w-[50vw] mt-[3px] rounded-tl-2xl fixed *:py-3 *:pl-5 px-4 pt-5 *:rounded-full bg-black min-h-full *:text-neutral-300 right-0 *:cursor-pointer"
  >
    <NuxtLink
      v-for="item in sidebarItem"
      :key="item.title"
      @click="selectMenu(item.title)"
      :class="menuClass(item.title)"
    >
      {{ item.title }}
    </NuxtLink>
  </div>
</template>
