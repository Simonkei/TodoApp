<template>
  <v-container style="width: 800px">
    <v-snackbar color="error" rounded class="text-center" top v-model="error">
      <v-row justify="center">
        {{ errorMsg }}
      </v-row>
    </v-snackbar>
    <v-row class="mt-4" justify="center">
      <h1 style="color: #34495e">Todo</h1>
      <h1 style="color: #41b883">App</h1>
    </v-row>
    <v-row class="mt-12">
      <v-text-field
        v-model="inputTask"
        flat
        placeholder="Submit a task"
        rounded
        outlined
        dense
      ></v-text-field>
      <v-btn
        @click="submitTask"
        class="ml-4"
        style="height: 40px"
        rounded
        color="secondary"
      >
        Submit
      </v-btn>
    </v-row>
    <v-row>
      <v-col cols="7">
        <h3>Task</h3>
      </v-col>
      <v-col cols="4">
        <h3>Status</h3>
      </v-col>
    </v-row>
    <task-card
      @change-status="changeStatus"
      @delete-task="filterTask"
      v-for="(task, i) in tasks"
      :key="i"
      :task="task.task"
      :status="task.status"
      :id="task.id"
    />
  </v-container>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
export default {
  data() {
    return {
      counter: 3,
      inputTask: "",
      statuses: ["To-do", "Done"],
      error: false,
      errorMsg: "Invalid task! Input empty",
      tasks: [
        { id: "0", task: "Remake Game Of Thrones Season 7", status: "To-do" },
        { id: "1", task: "Walk with fluffy", status: "Done" },
        { id: "2", task: "Go to Netto and buy drinks", status: "To-do" },
      ],
    };
  },
  components: {
    TaskCard,
  },
  methods: {
    submitTask() {
      if (this.inputTask.length === 0) {
        this.error = true;
      } else {
        this.tasks.push({
          id: this.counter,
          task: this.inputTask,
          status: "To-do",
        });
      }
      this.inputTask = "";
      this.counter++;
    },
    filterTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      console.log(id);
      this.counter--;
    },
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 1) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
      console.log(index);
    },
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #34495e;
}
</style>
