<script setup>
  import Question from '../components/Question.vue'
  import QuizHeader from '../components/QuizHeader.vue'
  import Result from '../components/Result.vue'

  import { ref, watch, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import quizes from '../data/quizes.json'

  const route =  useRoute();
  const quizId = parseInt(route.params.id);

  const currentQuestionIndex = ref(0)
  const numberOfCorrectAnswers = ref(0);
  const showResult =  ref(false)

  const quiz = quizes.find(q => q.id === quizId)

  // Use computed to calculate values that are depended on other values
  // Question Stats is treated as like a ref
  const questionStatus = computed(() => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
  })
  
  const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length*100}%`);
  const onOptionSelected = (isCorrect) => {
    if(isCorrect) {
      numberOfCorrectAnswers.value++
    }
    currentQuestionIndex.value++
    if (quiz.questions.length === currentQuestionIndex.value){
      showResult.value = true
    }
  }
</script>


<template>
  <div>
    <QuizHeader 
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question 
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
        v-if="!showResult"
      />
      <Result
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        :quizLength="quiz.questions.length"
        v-else
      />
    </div>
  </div>
</template>

<style scoped>

</style>