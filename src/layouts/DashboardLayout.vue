<template>
  <div class="grid-container overflow-hidden">
    <aside class="sidenav">
      <ul class="sidenav-list">
        <li
          v-for="(page, index) in pageList"
          :key="index"
          @click="changePage(page)"
          :class="`sidenav-list-item ${
            page.title == activePage.title ? 'item-active' : ''
          }`"
        >
          <div>
            <div>{{ page.title }}</div>
          </div>
        </li>
      </ul>
    </aside>
    <router-view class="main-page -mt-24" v-slot="{ Component }">
      <transition name="scale-slide">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" src="@/assets/scss/dashboard.scss"></style>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

type RoutePage = { title: string; route: string };

let activePage = ref({
  title: "Dashboard",
  route: "dashboard",
});

const pageList = [
  {
    title: "Dashboard",
    route: "dashboard",
  },
  {
    title: "contact me",
    route: "contact",
  },
];

const router = useRouter();

router.afterEach((to) => {
  activePage.value = pageList.find(
    (page) => page.route == to.name
  ) as RoutePage;
});

function changePage(page: RoutePage): void {
  // activePage.value = page;

  router.replace({ name: page.route });
}
</script>
