<template>
  <div class="grid-container">
    <header class="header">
      <p class="page-title">{{ activePage }}</p>
      <span style="flex: 1;"></span>
      <r-button style="width: auto;" type="primary">
        Logout
      </r-button>
    </header>
    <aside class="sidenav">
      <ul class="sidenav-list">
        <li
          v-for="(pageName, index) in pageList"
          :key="index"
          @click="changePage(pageName)"
          :class="
            `sidenav-list-item ${pageName == activePage ? 'item-active' : ''}`
          "
        >
          {{ pageName }}
        </li>
      </ul>
    </aside>
    <component :is="activePage" class="main-page"></component>
  </div>
</template>

<script lang="ts" src="./Home.vue.ts"></script>
