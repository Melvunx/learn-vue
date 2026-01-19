<template>
  <h1>Todo list</h1>
  <form action="" @submit.prevent="createdTask(newTodo)">
    <input type="text" v-model="newTodo" />
    <button :disabled="newTodo.length === 0">Entrer votre tâche</button>
  </form>
  <!-- Affichage des tâches -->
  <div v-if="tasks.length > 0">
    <ul>
      <li :key="task.title" v-for="task in tasks">
        <p :class="{ complete: task.completed }">
          {{ task.title }} <span class="todo-date">enregistrer le {{ task.date }}</span>
        </p>
        <input type="checkbox" v-model="task.completed" />
      </li>
    </ul>
  </div>
  <p v-else class="empty">Aucune tâche à été trouvé</p>
  
</template>

<script setup lang="ts">
import { ref } from "vue";

const tasks = ref<{ title: string; completed: boolean; date: number }[]>([]);
const newTodo = ref("");

const createdTask = (title: string) => {
  tasks.value.push({ title, completed: false, date: Date.now() });
  newTodo.value = "";
};
</script>

<style scoped>
.complete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}

.todo-date {
  color: cornflowerblue;
}

.empty {
  color: red;
  font-size: 1.5rem;
}
</style>
