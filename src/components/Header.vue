<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/">Home page</RouterLink>
    <RouterLink to="/todo">Todo-list</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  margin: auto;
  width: 50%;
  justify-content: space-between;
  font-style: italic;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

a {
  text-decoration: none;
  transition: 0.2s;
}

a:hover {
  color: brown;
  transition: 0.2s;
}
</style>
