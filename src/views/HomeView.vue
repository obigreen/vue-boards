<template>
  <div class="home">
    <h1>Ваши доски</h1>
    <div class="boards">
      <router-link v-for="board in boards" :key="board.id" :to="'/board/' + board.id" class="board-card">
        {{ board.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Временные данные (потом заменим на API)
const boards = ref([
  { id: 1, name: "Проект 1" },
  { id: 2, name: "Маркетинг" },
  { id: 3, name: "Разработка" }
]);
</script>

<style scoped>
.home {
  padding: 20px;
}

.boards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.board-card {
  background: #0079bf;
  color: white;
  padding: 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}
</style>

