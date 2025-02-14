<template>
  <div class="boards-container">
    <div class="boards-title-wrapper">
      <h2 class="boards-title">My boards</h2>
    </div>

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
  { id: 1, name: "Board one" },
  { id: 2, name: "Board two" },
]);
</script>

<style scoped>
.boards-container {
  height: 100%;
}

.boards-title-wrapper {
  background: #212121;
  padding: 20px;
}

.boards-title {
  font-size: 25px;
  color: white;
}

.boards {
  display: flex;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: start;
}

.board-card {
  background: #212121;
  color: white;
  padding: 30px;
  border-radius: 8px;
  transition: 0.3s;
  font-size: 30px;
}

.board-card:hover {
  color: #42b983;
}
</style>
