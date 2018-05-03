<template>
  <section class="problem">
    <div class="row">
      <b-col md="12">
        <h1 class="title mb-3">{{title}}</h1>
        <p class="mb-3">{{selectedProblem.description}}</p>
        <pre class="code"><code>{{selectedProblem.code}}</code></pre>
      </b-col>
    </div>
    <form>
      <div class="form-group">
        <textarea class="form-control mb-3" rows="3" v-model="answer" @input="resetResult"></textarea>
        <b-btn class="mb-3" variant="primary" @click="checkAnswer">Check Answer</b-btn>
        <transition name="fade">
          <p class="result" v-if="result">
            <span>{{result}}</span>
            <a href="javascript:void(0)" v-if="isCorrectAnswer && !isFinalProblem" @click="moveNextProblem">Next Problem</a>
            <span v-else-if="isCorrectAnswer">You're Finished!</span>
          </p>
        </transition>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Problem',
  data () {
    return {
      problems: [
        {
          description: 'What is truth?',
          code: 'function problem() { return __; }'
        },
        {
          description: 'Simple Math',
          code: 'function problem() { return 42 === 6 * __; }'
        }
      ],
      answer: null,
      result: null
    }
  },
  computed: {
    problemNumber () {
      return this.$route.params.id
    },
    title () {
      return 'Problem # ' + this.problemNumber
    },
    selectedProblem () {
      const problemId = this.problemNumber - 1
      return this.problems[problemId]
    },
    isCorrectAnswer () {
      return Number(this.problemNumber) === 1 ? this.answer === 'true' : this.answer === '7'
    },
    nextProblemNumber () {
      return Number(this.problemNumber) + 1
    },
    isFinalProblem () {
      return Number(this.problemNumber) === this.problems.length
    }
  },
  methods: {
    checkAnswer () {
      this.result = this.isCorrectAnswer ? 'Correct!' : 'Incorrect!'
    },
    resetResult () {
      this.result = null
    },
    resetForm () {
      this.answer = null
      this.result = null
    },
    moveNextProblem () {
      this.resetForm()
      this.$router.push({name: 'Problem', params: {id: this.nextProblemNumber}})
    }
  }
}
</script>

<style scoped lang="scss">
  .problem {
    margin: 60px;
  }
  .code {
    padding: 12px;
    background: #F1F1F1;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave,
  .fade-enter-to {
    opacity: 1;
  }
</style>
