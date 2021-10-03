<template>
  <div>
    <div class="flex flex-row justify-between items-center">
      <p class="text-2xl text-gray-500 font-medium mb-10">Overview</p>
      <button
        class="bg-red-600 py-2 px-5 rounded-lg text-white font-medium"
        style="height: fit-content"
      >
        + ADD NEW WINE
      </button>
    </div>
    <div class="flex flex-wrap content-evenly">
      <card
        stripColor="orange"
        direction="column"
        class="mb-5"
        style="min-width: 18rem;"
      >
        <p class="text-gray-500 font-medium">Open orders</p>
        <p class="text-3xl text-black font-bold mb-2">239</p>
      </card>
      <card
        stripColor="blue"
        direction="column"
        class="mb-5"
        style="min-width: 18rem;"
      >
        <p class="text-gray-500 font-medium">Orders in transit</p>
        <p class="text-3xl text-black font-bold mb-2">126</p>
      </card>
      <card
        stripColor="green"
        direction="column"
        class="mb-5"
        style="min-width: 18rem;"
      >
        <p class="text-gray-500 font-medium">Fulfilled orders</p>
        <p class="text-3xl text-black font-bold mb-2">1,254</p>
      </card>
      <card
        stripColor="red"
        direction="column"
        class="mb-5"
        style="min-width: 18rem;"
      >
        <p class="text-gray-500 font-medium">Cancelled orders</p>
        <p class="text-3xl text-black font-bold mb-2">35</p>
      </card>
    </div>
  </div>
</template>

<script lang="ts" src="./Dashboard.vue.ts"></script>
