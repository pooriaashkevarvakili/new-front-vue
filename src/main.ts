/* =========================================================================================
    File Name: main.ts
    Description: Bootstrap of Project.
    ----------------------------------------------------------------------------------------
    Item Name: Hacoupian - Technology Dep.
    Author: Ahmadreza Azizan

========================================================================================== */

import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import Router from "./router";
import Store from "./store/store";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import { install } from "@icon-park/vue-next/es/all";
import i18n from "@/i18n";
import axios from "./services/axios";

//----------------------------------------------------------------------------------------
// Styles of project

import "ant-design-vue/dist/antd.less";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
//import full version fo ant-design-vue (see Note)
import "./assets/style/ant-rtl.less";
import "./assets/style/transition.less";
import "ant-design-vue/dist/antd.less";
import "./assets/style/css/main.css";
import "./assets/style/scss/main.scss";
//----------------------------------------------------------------------------------------

const app = createApp(App);

app.use(Antd);
app.use(BootstrapIconsPlugin);
app.use(Store);
app.use(i18n);
app.use(Router);

app.use(PerfectScrollbar);

install(app, "i"); // use custom prefix 'i', eg: icon is People, name is i-people.

app.provide("$axios", axios);
app.mount("#app");
