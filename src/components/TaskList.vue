<template>
  <div class="task-list">
    <h3>{{ list.title }}</h3>
    <div class="tasks">
      <TaskCard v-for="task in list.tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from "@/components/TaskCard.vue";
/* eslint-disable no-undef */
defineProps<{
  list: { title: string; tasks: { id: number; name: string }[] };
}>();
</script>

<style scoped>
.task-list {
  background: #212121;
  padding: 15px;
  border-radius: 8px;
  min-width: 250px;
  height: max-content;
}

.task-list h3 {
  text-align: left;
  color: white;
  margin-bottom: 30px;
}

.tasks {
  margin-top: 10px;
}
</style>
