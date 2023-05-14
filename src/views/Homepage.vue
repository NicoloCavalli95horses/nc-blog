<template>
  <div class="wrapper">
    <template v-if="!documents">
      <p>loading...</p>
    </template>

    <template v-else>
      <div class="post" v-for="doc in documents" :key="doc.id">
        <div class="flex-center flex-space-between">
          <h2 class="title">{{ doc.title }}</h2>
          <p class="body">{{ getDate( doc.createdAt.seconds ) }}</p>
        </div>
        
        <p class="body">{{ doc.body }}</p>
        <h5 class="link">Read more</h5>
        <div class="tags">
          <template v-for="tag in doc.tags" :key="tag">
            <Chip :text="tag" />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// ==========================
// Import
// ==========================
import getCollection from '../utils/getCollection';
import Chip from '../components/Chip.vue';

// ==========================
// Consts
// ==========================
const { documents } = getCollection({ collectionName: 'posts'});

// ==========================
// Functions
// ==========================
function getDate( timestamp ) {
  const date = new Date(timestamp * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;

  .post {
    min-width: 30rem;
    max-width: 60rem;
    margin: 2rem auto;
    background-color: var(--white);
    border-radius: var(--radius-s);
    padding: 1rem;
    filter: drop-shadow(0 0.4rem 0.25rem rgba(0, 0, 0, 0.6));

    .title {
      color: var(--primary);
    }
    .body {
      color: var(--black);
      padding: 0.5rem;
    }
    .link {
      color: var(--primary);
      cursor: pointer;
      padding: 0.5rem;
    }
    .tags {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
