import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#34495e",
        secondary: "#41b883",
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
