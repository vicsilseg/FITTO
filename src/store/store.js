import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

Vue.use(Vuex);

const state = {
  usuario: {
    nombre: "Víctor",
    apellidos: ["Silva", "Segarra"],
    bio: "",
    email: "",
    codigo: null,
    avatar: {
      color: null,
      figura: null,
    }
  },
  NewPost: {
    titulo: "",
    fecha: "",
    post: ""
  }
};

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
