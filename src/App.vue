<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);

const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => (counter.value = 0);

// =============================================================================

const movies = ref(["Avengers", "Peter Pan", "Frusti", "DoomsDay 2"]);

const deleteMovie = (movie: string) => {
  movies.value = movies.value.filter((m) => m != movie);
};

const sortMovies = () => {
  // movies.value = movies.value.sort((a, b) => a.localeCompare(b));
  movies.value = movies.value.sort((a, b) => (a > b ? 1 : -1));
};
</script>

<template>
  <div class="container">
    <div class="part">
      <h1>Petit compteur</h1>
      <!-- Condition -->
      <p>
        Compteur : <span v-if="counter % 2" :class="{ impair: counter % 2 }">{{ counter }}</span>
        <span v-else class="pair">{{ counter }}</span>
      </p>
      <div class="button">
        <button id="inc" @click="increment">Incrémenter</button>
        <button id="res" @click="reset">Reset</button>
        <button id="dec" @click="decrement">Décrémenter</button>
      </div>
    </div>

    <div class="part">
      <h1>Films</h1>
      <button @click="sortMovies">Trier</button>
      <ul>
        <li :key="movie" v-for="movie in movies">
          <span>{{ movie }} <button @click="deleteMovie(movie)">Supprimer</button></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-style: italic;
}

.pair {
  color: green;
}

.impair {
  color: magenta;
}

p:first-of-type {
  text-align: center;
  font-style: italic;
}

div.button {
  display: flex;
  justify-content: space-around;
}

div.container {
  display: flex;
  flex-direction: column;
}

div.part {
  display: flex;
  flex-direction: column;
  border-top: 2px black solid;
  border-bottom: 2px black;
  gap: 10px;
  padding: 50px 0 30px 0;
}

div.part:first-of-type {
  padding-top: 0;
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

li {
  padding: 5px;

  span {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
