<template>
  <div class="task-card">
    {{ task.name }}
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
defineProps<{ task: { id: number; name: string } }>();
</script>

<style scoped>
.task-card {
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
}
</style>
