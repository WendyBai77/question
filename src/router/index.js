// 來自套件(載入vue-router資源)，能夠以"不會有路徑"來分辨
import { createRouter, createWebHashHistory } from "vue-router";
// 載入獨立元件
import HomeView from "../views/HomeView.vue";

// 路由設定
const router = createRouter({
  // 網址路徑模式：使用網址 hash 的形式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 匯入路由表
  routes: [
    {
      path: "/", // 匯入路徑
      name: "home", // 指定路由名稱
      component: HomeView, // 匯入外部元件(第4行)
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 下方寫法也可載入外部元件
      component: () => import("../views/AboutView.vue"),
    },
    {
      // 第一層在最前面需加上斜線
      path: "/newpage",
      name: "新增頁面",
      // 元件使用箭頭函式匯入
      component: () => import("../views/NewPage.vue"),
      // 新增子路由
      children: [
        {
          path: "a",
          component: () => import("../views/componentA.vue"),
        },
        {
          path: "b",
          component: () => import("../views/componentB.vue"),
        },
      ],
    },
  ],
});
// Vue Router的設定檔建立好之後，就可以匯出給main.js使用
export default router;
