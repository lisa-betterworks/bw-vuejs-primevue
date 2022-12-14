/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";
import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "uno.css";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import AutoComplete from 'primevue/autocomplete';

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue);

app.component("Button", Button);
app.component("InputText", InputText);

app.mount("#app");
