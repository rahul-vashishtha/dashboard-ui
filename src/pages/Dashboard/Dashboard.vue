<template>
  <div>
    <div>
      <p class="text-2xl text-gray-500 font-medium mb-10">Overview</p>
    </div>
    <div class="flex flex-wrap content-evenly">
      <card direction="column" class="mb-5" style="min-width: 20rem;">
        <p class="text-gray-500 font-medium">Open orders</p>
        <p class="text-3xl text-black font-bold mb-2">239</p>
      </card>
      <card direction="column" class="mb-5" style="min-width: 20rem;">
        <p class="text-gray-500 font-medium">Orders in transit</p>
        <p class="text-3xl text-black font-bold mb-2">126</p>
      </card>
      <card direction="column" class="mb-5" style="min-width: 20rem;">
        <p class="text-gray-500 font-medium">Fulfilled orders</p>
        <p class="text-3xl text-black font-bold mb-2">1,254</p>
      </card>
      <card direction="column" class="mb-5" style="min-width: 20rem;">
        <p class="text-gray-500 font-medium">Cancelled orders</p>
        <p class="text-3xl text-black font-bold mb-2">35</p>
      </card>
    </div>
  </div>
</template>

<script lang="ts" src="./Dashboard.vue.ts"></script>
