<template>
  <div id="app">
    <!-- Боковая панель -->
    <nav class="sidebar">
      <router-link to="/">🏠 Home</router-link>
      <router-link to="/board">📌 Board</router-link>
      <button @click="toggleBoards" class="boards-btn">📋 Доски</button>

      <div v-if="showBoards" class="boards-dropdown">
        <router-link
          v-for="board in boards"
          :key="board.id"
          :to="'/board/' + board.id"
          @click="closeBoards"
        >
          {{ board.name }}
        </router-link>
      </div>
    </nav>

    <!-- Основной контент -->
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showBoards = ref(false);
const boards = ref([
  { id: 1, name: "Проект 1" },
  { id: 2, name: "Маркетинг" },
  { id: 3, name: "Разработка" },
]);

const toggleBoards = () => {
  showBoards.value = !showBoards.value;
};

const closeBoards = () => {
  showBoards.value = false;
};
</script>
