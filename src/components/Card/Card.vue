<template>
  <div
    class="card"
    :class="`${flexDirection} ${itemsAlign} ${tClass}`"
    :style="style"
  >
    <span
      class="h-2 -mt-6 mb-5 -mr-10 -ml-10 rounded-t-lg"
      :style="`background-color: ${stripColor}; transform: translateZ(-10px)`"
    ></span>
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./Card.vue.ts" />
