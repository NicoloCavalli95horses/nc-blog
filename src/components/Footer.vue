<template>
  <footer>
    <div class="separator" />
    <div class="flex-center"><Logo /></div>

    <div class="contacts top-32">
      <div class="label">
        <Icon icon="fa-solid fa-phone" class="svg-18 r-12" />
        <h6>+39 346 95 92 168</h6>
      </div>
      <div class="label">
        <Icon icon="fa-solid fa-envelope" class="svg-18 r-12" />
        <h6>nicolo.cavalli95@gmail.com</h6>
      </div>
      <div class="label">
        <Icon icon="fa-solid fa-user" class="svg-18 r-12" />
        <a href="https://www.linkedin.com/in/nicolo-cavalli/">
          <h6>LinkedIn page</h6>
        </a>
      </div>
    </div>

    <div class="separator" />
  </footer>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { getViewport } from '../utils/screen_size'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo.vue'

// ==============================
// Consts
// ==============================
library.add(fas)
const device = getViewport()
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--footer-bg);
  box-shadow: var(--box-shadow-footer);
  padding: 0 2.3rem;

  .contacts {
    width: 100%;
    max-width: 80rem;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    padding: 0.6rem;
  }
}
</style>
