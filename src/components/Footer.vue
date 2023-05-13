<template>
    <footer>
    </footer>
  </template>
  
  <script setup>
  // ==============================
  // Import
  // ==============================
  import { getViewport } from "../utils/screen_size";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  
  // ==============================
  // Consts
  // ==============================
  library.add( fas );
  const device = getViewport();
  </script>
  
  <style lang="scss" scoped>
  footer {
    background-color: var(--footer-bg);
    box-shadow: var(--box-shadow-footer);
    padding: 0 2.3rem;
    height: 40rem;
  }
  </style>