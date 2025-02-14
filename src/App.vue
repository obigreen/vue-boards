<template>
  <main class="app-grid">
    <nav class="sidebar">
      <h1 class="logo">Task Manager</h1>
      <ul class="sidebar-nav">
        <li>
          <router-link to="/">Boards</router-link>
        </li>
      </ul>
    </nav>
    <div class="main-content">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100%;
}

.sidebar {
  background: #212121;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.logo {
  font-size: 25px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sidebar-nav li a {
  color: white;
  font-size: 21px;
  cursor: pointer;
  transition: 0.3s;
}

.sidebar-nav li a:hover {
  color: #42b983;
}

.main-content {
  overflow-y: auto;
  height: 100%;
}
</style>
