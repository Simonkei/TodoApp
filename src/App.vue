<template>
  <v-app>
    <v-main>
      <todo-list />
    </v-main>
  </v-app>
</template>

<script>
import TodoList from "../src/components/TodoList.vue";
export default {
  name: "App",

  components: {
    TodoList,
  },

  data: () => ({
    //
  }),
};
</script>
