<template>
  <div class="board-view">
    <h1>{{ board?.name }}</h1>
    <div class="lists">
      <TaskList v-for="list in lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import TaskList from "@/components/TaskList.vue";

const route = useRoute();
const boards = ref([
  { id: 1, name: "Проект 1" },
  { id: 2, name: "Маркетинг" },
  { id: 3, name: "Разработка" },
]);

const board = ref(boards.value.find((b) => b.id === Number(route.params.id)));

const lists = ref([
  { id: 1, title: "Нужно сделать", tasks: [{ id: 1, name: "Задача 1" }] },
  { id: 2, title: "В процессе", tasks: [{ id: 2, name: "Задача 2" }] },
  { id: 3, title: "Готово", tasks: [{ id: 3, name: "Задача 3" }] },
]);
</script>

<style scoped>
.board-view {
  padding: 20px;
  text-align: center;
}

.lists {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
