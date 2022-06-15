<template>
  <v-row class="mb-4">
    <v-col>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col class="black--text" cols="7"> {{ task }} </v-col>
            <v-col cols="2">
              <v-chip :color="chipColor">{{ status }}</v-chip>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="1">
              <v-btn @click="changeStatus(id)" color="green" small icon>
                <v-icon>mdi-pencil</v-icon></v-btn
              >
            </v-col>
            <v-col cols="1">
              <v-btn @click="deleteTask(id)" small icon>
                <v-icon color="red">mdi-close</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["task", "status", "id"],
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
    changeStatus(id) {
      this.$emit("change-status", id);
    },
  },
  computed: {
    chipColor() {
      return this.status === "To-do" ? "yellow" : "green";
    },
  },
};
</script>
