<template lang="html">
  <div class="questions">
      <div v-for="(question, questionIndex) in questions" class="question">
        <p>{{question.text}}</p>
        <ul class="answers">
          <li v-for="(answer, answerIndex) in question.answers" @click="handleClick(question, answer, answerIndex)" v-bind:class="handleClass(question,answer,answerIndex)">{{answer}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import questionService from '../services/questionService.js'

export default {
  name: "quiz",
  data() {
    return {
      questions: [],
      show: {0:{0:'', 1:'', 2:'', 3:''},
      1:{0:'', 1:'', 2:'', 3:''},
      2:{0:'', 1:'', 2:'', 3:''}}
    }
  },
  methods: {
    fetchData() {
      questionService.getQuestions()
      .then(questions => this.questions = questions)
    },

    handleClick(question, answer, answerIndex) {
      this.show[question.number][answerIndex] = true;
    },

    handleClass(question, answer, answerIndex){
      if(this.show[question.number][answerIndex]){
        return (answer===question.answer).toString()
      }
    }
  },

  mounted() {
    this.fetchData()
  }
}
</script>

<style lang="css" scoped>
.questions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  list-style: none;
}

.question {
  max-width: 600px
}

ul {
  padding: 0;
}

li {
  border-style: solid;
  border-width: 1px;
  text-align: center;
  list-style: none;
}

.true {
  background-color: green;
}

.false {
  background-color: red;
}
</style>
