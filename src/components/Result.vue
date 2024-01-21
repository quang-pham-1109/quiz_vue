<script setup>
  const { numberOfCorrectAnswers, quizLength }  = defineProps(['numberOfCorrectAnswers', 'quizLength'])
  import { RouterLink } from 'vue-router'

</script>
<template>
  <div class="result">
    <p>Your Result</p>
    <h1>
      {{ numberOfCorrectAnswers }}/{{ quizLength }}
    </h1>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>
<style scoped>
  .result {
    text-align: center;
    padding: 100px;
  }
  p {
    font-size: 25px;
  }
  h1 {
    font-size: 80px;
  }
</style>