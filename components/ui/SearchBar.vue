<script setup>
import { useMoviesStore } from "@/stores/moviesStore";

const store = useMoviesStore();
const query = ref(store.searchQuery);

watch(query, (newQuery) => {
  store.setSearchQuery(newQuery);
});

const updateQuery = () => {
  store.setSearchQuery(query.value);
};
</script>

<template>
  <div>
    <input
      type="text"
      v-model="query"
      @input="updateQuery"
      placeholder="Search movies..."
      class="w-full md:w-[30vw] p-2 rounded-xl my-0 bg-white"
    />
  </div>
</template>
