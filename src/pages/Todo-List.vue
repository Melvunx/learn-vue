<template>
  <h1>Todo list</h1>
  <form action="" @submit.prevent="createdTask">
    <input type="text" v-model="newTodo" />
    <button :disabled="newTodo.length === 0">Entrer votre tâche</button>
  </form>
  <!-- Affichage des tâches -->
  <div v-if="tasks.length > 0">
    <label>
      <input type="checkbox" v-model="hideCompleted" />
      Afficher les toutes les tâches à faire
    </label>
    <ul>
      <li :key="task.title" v-for="task in sortTask()">
        <label :for="task.date.toString()" :class="{ complete: task.completed }">
          <input type="checkbox" :name="task.date.toString()" v-model="task.completed" />
          {{ task.title }} <span class="todo-date">enregistrer le {{ task.date }}</span>
        </label>
      </li>
    </ul>
  </div>
  <p v-else class="empty">Aucune tâche à été trouvé</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tasks = ref<{ title: string; completed: boolean; date: number }[]>([]);
const newTodo = ref("");
const hideCompleted = ref(false);

const createdTask = () => {
  tasks.value.push({ title: newTodo.value, completed: false, date: Date.now() });
  newTodo.value = "";
};

const sortTask = () => {
  const taskList = tasks.value.sort((a, b) => (a.completed > b.completed ? 1 : -1));

  if (hideCompleted.value) return taskList.filter((t) => t.completed === false);

  return taskList;
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
