<template>
  <div>
    <h1>Доска #{{ $route.params.id }}</h1>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
