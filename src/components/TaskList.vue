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

defineProps({
  list: Object,
});
</script>

<style scoped>
.task-list {
  background: #f4f5f7;
  padding: 15px;
  border-radius: 8px;
  width: 250px;
  min-height: 200px;
}

.tasks {
  margin-top: 10px;
}
</style>
