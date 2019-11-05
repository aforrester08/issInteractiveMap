<template lang="html">
  <div class="">
    <div v-for="question in questions">
      <p>{{question.text}}</p>
      <div v-for="answer in question.answers">
              <li @click="handleClick(question, answer)" v-bind:class="handleClass(question,answer)">{{answer}}</li>
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
      show: {0:false, 1:false, 2:false}
    }
  },
  methods: {
    fetchData() {
      questionService.getQuestions()
      .then(questions => this.questions = questions)
    },

    handleClick(question, answer) {
      this.show[question.number] = true;
    },

    handleClass(question, answer){
      if(this.show[question.number]===true){
        console.log(this.show[question.number])
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

};
</style>
