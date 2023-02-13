<script setup>
// 來自套件(載入vue-router資源)
import { RouterLink, RouterView } from "vue-router";
// 載入獨立元件
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!--加入對應連結。讓使用者可點擊-->
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <!--對應路由表上的路徑(path:"/about")-->
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <!--使用動態屬性加入連結，:to後面插入物件。name屬性也可進行頁面切換-->
            <router-link class="nav-link" :to="{ name: '新增頁面' }"
              >新增頁面</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <!--呈現路由配置元件 即可切換頁面-->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  padding-top: 80px;
}
</style>
