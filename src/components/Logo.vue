<template>
    <div class="logo" @click="$router.push('/')">
      <h4>{{ '< NC />' }}</h4>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .logo {
    width: max-content;
    display: grid;
    place-content: center;
    user-select: none;
    h4 {
      font-size: 2.8rem;
    }
  }
  </style>