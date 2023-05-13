<template>
  <!-- Desktop/tablet -->
  <nav v-if="device == 'desktop' || device == 'tablet'" class="desktop">
    <Logo />
    <span><RouterLink to="/about">About</RouterLink></span>
  </nav>

  <!-- Mobile -->
  <nav v-else-if="device == 'mobile'" class="mobile">
    <RouterLink to="/">
      <Logo class="l-24" />
    </RouterLink>
    <div class="menu" @click="show.mobile_menu = true">
      <Icon icon="fa-solid fa-bars" class="svg-24" />
    </div>
  </nav>

  <div class="navbar-m" :class="[device == 'mobile' ? 'mobile' : 'desktop']" />

  <Modal
    v-if="show.mobile_menu"
    :full_size="true"
    :close_btn="true"
    @closed="show.mobile_menu = false"
  >
    <div class="mobile-nav-options">
      <div @click="show.mobile_menu = false">
        <span><RouterLink to="/about">About</RouterLink></span>
      </div>
    </div>
  </Modal>
</template>

<script setup>
//==================================
// Import
//==================================
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { getViewport } from '../utils/screen_size.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo.vue'
import Modal from './Modal.vue'

//==================================
// Consts
//==================================
library.add(fas)
const device = getViewport()
const show = reactive({
  mobile_menu: false
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  span {
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
  &.desktop {
    height: var(--nav-height-desktop);
    justify-content: space-around;
  }
  &.mobile {
    height: var(--nav-height-mobile);
    justify-content: space-between;
    .menu {
      margin-right: 2.4rem;
      transition-duration: var(--transition-medium);
      cursor: pointer;
      &:hover {
        svg {
          color: var(--secondary);
          transition-duration: var(--transition-medium);
        }
      }
    }
  }
}

.navbar-m {
  &.desktop {
    height: var(--nav-height-desktop);
  }
  &.mobile {
    height: var(--nav-height-mobile);
  }
}
.mobile-nav-options {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
