<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => (counter.value = 0);
</script>

<template>
  <h1>Petit compteur</h1>
  <p>Compteur : {{ counter }}</p>
  <div class="button">
    <button id="inc" @click="increment">Incrémenter</button>
    <button id="res" @click="reset">Reset</button>
    <button id="dec" @click="decrement">Décrémenter</button>
  </div>
</template>

<style scoped>
html {
  padding: 0;
  margin: 0;
}

h1 {
  font-style: italic;
}

p:first-of-type {
  text-align: center;
  font-style: italic;
}

div.button {
  display: flex;
  justify-content: space-around;
}

button {
  padding: 10px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  color: white;
  transition: 0.2s;
}

button#res:hover {
  color: black;
  background-color: white;
}

button#res {
  background-color: black;
  color: white;
}

button#inc {
  background-color: lime;
}

button#dec {
  background-color: rgb(255, 79, 79);
}
</style>
