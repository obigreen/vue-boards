<template>
  <div class="board-container">
    <header class="header">
      <h2 class="header-title">{{ board?.name }}</h2>
    </header>
    <div class="board-view">
      <div class="lists">
        <TaskList v-for="list in lists" :key="list.id" :list="list" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import TaskList from "@/components/TaskList.vue";

const route = useRoute();
const boards = ref([
  { id: 1, name: "First board" },
  { id: 2, name: "Second board" },
]);

const board = ref(boards.value.find((b) => b.id === Number(route.params.id)));

const lists = ref([
  {
    id: 1,
    title: "Нужно сделать",
    tasks: [
      { id: 1, name: "Задача 1" },
      { id: 2, name: "Задача 2" },
    ],
  },
  { id: 2, title: "В процессе", tasks: [{ id: 1, name: "Задача 1" }] },
  {
    id: 4,
    title: "Тест",
    tasks: [
      { id: 3, name: "Задача 1" },
      { id: 3, name: "Задача 1" },
    ],
  },
  {
    id: 3,
    title: "Апрув",
    tasks: [
      { id: 1, name: "Задача 1" },
      { id: 2, name: "Задача 2" },
      { id: 3, name: "Задача 3" },
      { id: 4, name: "Задача 4" },
      { id: 5, name: "Задача 5" },
    ],
  },
  { id: 4, title: "test", tasks: [{ id: 1, name: "test" }] },
  { id: 5, title: "test", tasks: [{ id: 2, name: "test" }] },
  { id: 6, title: "test", tasks: [{ id: 3, name: "test" }] },
  { id: 7, title: "test", tasks: [{ id: 4, name: "test" }] },
]);
</script>

<style scoped>
.board-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.header {
  background: #212121;
  padding: 20px;
  color: white;
  flex-shrink: 0;
  width: 100%;
}

.header-title {
  font-size: 25px;
}

.board-view {
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
}

.lists {
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  overflow-x: auto;
  height: 100%;
}
</style>
