<template>
  <div class="home">
    <h1>This is the home page</h1>
    
    <template v-if="is_loading">
    <p> loading... </p>
    </template>

    <template v-else>
      <div class="post" v-for="post in posts" :key="post.id">
        <h2 class="title">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <div class="tags">
          <template v-for="tag in post.tags" :key="tag">
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
import { onBeforeMount, ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Chip from "../components/Chip.vue";

// ==========================
// Consts
// ==========================
const posts = ref([]);
const is_loading = ref( true );

// ==========================
// Functions
// ==========================
async function loadPost(){
  try {
    const collections = collection(db, 'posts');
    const res = await getDocs( collections );
    res.docs.forEach( doc => {
      posts.value.push({ ...doc.data(), id: doc.id });
    });
    is_loading.value = false;
  } catch (err) {
    console.log( err );
    is_loading.value = true;
  }
}

// ==========================
// Life cycle
// ==========================
onBeforeMount( async () => {
  await loadPost();
});

</script>

<style lang="scss" scoped>
  .home {
    min-height: 100vh;

    .post {
      margin: 2rem 0;
      .title {
        text-transform: uppercase;
        margin: 0.5rem 0;
      }
      .tags {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
