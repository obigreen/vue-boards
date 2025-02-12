<template>
  <div class="board">
    <h2></h2>
    <div class="lists">
      <List v-for="list in lists" :key="list.id" :title="list.title" />
    </div>
  </div>
</template>

<script setup lang="ts">

import List from "./List.vue";
import { ref } from "vue";

const lists = ref([
  { id: 1, title: "Нужно сделать" },
  { id: 2, title: "В процессе" },
  { id: 3, title: "Готово" }
]);

</script>

<style scoped lang="scss">
.board {
  padding: 20px;
}

.lists {
  display: flex;
  gap: 10px;
}

</style>