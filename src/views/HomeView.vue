<template>
  <div class="home">
    <h1>Ваши доски</h1>
    <div class="boards">
      <router-link
        v-for="board in boards"
        :key="board.id"
        :to="'/board/' + board.id"
        class="board-card"
      >
        {{ board.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const boards = ref([
  { id: 1, name: "Проект 1" },
  { id: 2, name: "Маркетинг" },
  { id: 3, name: "Разработка" },
]);
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}

.boards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.board-card {
  background: #0079bf;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  width: 200px;
  text-align: center;
  transition: 0.3s;
}

.board-card:hover {
  background: #005f8f;
}
</style>
