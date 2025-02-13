<template>
  <div class="board">
    <div class="lists">
      <TaskList v-for="list in board?.lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import TaskList from "./TaskList.vue";

type Card = {
  id: number;
  title: string;
};

type ListType = {
  id: number;
  title: string;
  cards: Card[];
};

type BoardType = {
  id: number;
  name: string;
  lists: ListType[];
};

// Принимаем данные доски как пропс
defineProps<{ board: BoardType | undefined }>();
</script>

<style scoped>
.board {
  padding: 20px;
}

.lists {
  display: flex;
  gap: 15px;
}
</style>
