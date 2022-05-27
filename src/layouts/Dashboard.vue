<template>
  <div class="grid-container bg-black overflow-hidden">
    <aside class="sidenav self-center">
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

let activePage = ref({
  title: "hey!",
  route: "Home",
});

const pageList = [
  {
    title: "hey!",
    route: "home",
  },
  {
    title: "about me",
    route: "about",
  },
  {
    title: "skills",
    route: "skills",
  },
  {
    title: "experience",
    route: "experience",
  },
  {
    title: "education",
    route: "education",
  },
  {
    title: "social",
    route: "social",
  },
  {
    title: "contact me",
    route: "contact",
  },
];

const router = useRouter();

router.afterEach((to) => {
  activePage.value = pageList.find((page) => page.route == to.name)!;
});

function changePage(page: { title: string; route: string }): void {
  // activePage.value = page;

  router.replace({ name: page.route });
}
</script>
