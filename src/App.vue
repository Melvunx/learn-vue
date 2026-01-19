<template>
  <Header />
  <main><RouterView /></main>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<style>
main {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

button {
  padding: 10px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
}
</style>
