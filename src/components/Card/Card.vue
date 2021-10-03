<template>
  <div
    class="card"
    :class="`${flexDirection} ${itemsAlign} ${tClass}`"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" src="./Card.vue.ts" />
