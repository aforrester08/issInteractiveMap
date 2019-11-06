<template lang="html">
  <div class="">
    <div v-for="(question, questionIndex) in questions">
      <p>{{question.text}}</p>
      <div v-for="(answer, answerIndex) in question.answers">
              <li @click="handleClick(question, answer, answerIndex)" v-bind:class="handleClass(question,answer,answerIndex)">{{answer}}</li>
      </div>
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
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
  padding: 20px;
}

li {
  border-style: solid;
  border-width: 1px;
  padding: 10px;
}

.true {
  background-color: green;
}

.false {
  background-color: red;
}
</style>
