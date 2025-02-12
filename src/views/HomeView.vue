<template>
  <div class="home">
    <h1>Ваши доски</h1>
    <div class="boards">
      <!-- Цикл, чтобы сгенерировать карточки для каждой доски -->
      <!-- v-for проходит по массиву boards и создает элементы -->
      <router-link
        v-for="board in boards"
        :key="board.id"
        :to="'/board/' + board.id"
        class="board-card"
      >
        <!-- Динамическая ссылка на маршрут с уникальным ID -->
        {{ board.name }}
        <!-- Название каждой доски отображается внутри ссылки -->
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"; // Импортируем ref из Vue для создания реактивных данных

// Создаем реактивный массив с досками
// Пока используем временные данные (набор объектов с id и name)
// В будущем этот массив можно заменить данными из API
const boards = ref([
  { id: 1, name: "Проект 1" }, // Первая доска с ID и названием
  { id: 2, name: "Маркетинг" }, // Вторая доска
  { id: 3, name: "Разработка" }, // Третья доска
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
