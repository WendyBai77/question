<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link
          to="/newpage/a"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          元件A
        </router-link>
        <router-link
          to="/newpage/b"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          元件B
        </router-link>
      </div>
    </div>

    <div class="col-8">
      <!--呈現路由配置元件-->
      <router-view></router-view>
    </div>
  </div>
</template>
