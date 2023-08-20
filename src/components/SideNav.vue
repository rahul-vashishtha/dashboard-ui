<template>
  <aside class="sidenav bg-gray-600">
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
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

type RoutePage = { title: string; route: string };

const activePage = ref({
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
