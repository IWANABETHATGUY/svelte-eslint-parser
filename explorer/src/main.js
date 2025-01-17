import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"

import AstExplorer from "./components/AstExplorer.vue"
import ESLintPlayground from "./components/ESLintPlayground.vue"

const routes = [
    { path: "/", name: "ast", component: AstExplorer },
    { path: "/playground", name: "playground", component: ESLintPlayground },
]

const router = createRouter({
    // eslint-disable-next-line no-process-env -- ignore
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

createApp(App).use(router).mount("#app")
