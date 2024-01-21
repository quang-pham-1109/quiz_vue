<script setup>
  import Card from '../components/Card.vue';
  import q from '../data/quizes.json';
  import { ref, watch } from 'vue';

  const quizes = ref(q);
  const search = ref("");

  //if search changes a callback function is run
  watch(search, () => {
    quizes.value = q.filter(quiz =>  quiz.name.toLowerCase()
      .includes(search.value.toLocaleLowerCase())
    )
  });
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
  </div>
  <div class="option-container">
    <Card 
      v-for="quiz in quizes" 
      :key="quiz.id" 
      :quiz="quiz"
    />
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }
  header input {
    border: none;
    background-color: rgba(36, 36, 36, 0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .option-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  
 
</style>