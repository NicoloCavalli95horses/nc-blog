<template>
  <div class="wrapper">
    <h2>Admin page</h2>

    <div class="input-wrapper">
      <InputText placeholder="Title" v-model="title" />
      <InputText placeholder="Tags" input_type="tag" v-model="current_tag" @newtag="onNewTag" />
      <div class="flex-center end top-12">
        <template v-for="(tag, i) in tags" :key="tag">
          <Chip :text="tag" @click="deleteTag(i)" />
        </template>
      </div> 
      <InputText input_type="textarea" placeholder="Body" v-model="body" />
      
      <div class="flex-center end top-12">
        <Btn text="add post" @click="onClick" :def="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
// ==========================
// Import
// ==========================
import { ref } from 'vue';
import { db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Btn from '../components/Btn.vue';
import Chip from '../components/Chip.vue';
import InputText from '../components/InputText.vue';

// ==========================
// Consts
// ==========================
const title = ref('');
const body = ref('');
const current_tag = ref('');
const tags = ref([]);

// ==========================
// Functions
// ==========================
function onNewTag( tag ){
  tags.value.push( tag );
  current_tag.value = '';
}

function deleteTag( i ) {
  if (i > -1) { 
    tags.value.splice(i, 1);
  }
}

async function onClick() {
  await addDoc(collection( db, 'posts'), {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: serverTimestamp()
  });
  // reset form
  title.value = '';
  body.value = '';
  tags.value = [];
  current_tag.value = '';
}

</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  h2 {
    padding: 2rem 0;
    border-bottom: 0.2rem solid var(--primary);
  }
  .input-wrapper {
    margin: 2rem 0 6rem 0; 
  }
}
</style>
