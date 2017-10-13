<template>
  <div class="question">
    <div class="top">{{renderValue(value1)}}</div>
    <div class="bottom"><span class="operator">{{renderOperator(operator)}}</span> {{renderValue(value2)}}</div>
    <hr/>
    <div class="answer">{{renderValue(answer)}}</div>
  </div>
</template>
<script>
export default {
  name: 'Question',
  props: ['value1', 'value2', 'operator', 'answer'],
  created() {
    window.addEventListener('keyup', this.handleKeyUp);
  },
  methods: {
    handleKeyUp(e) {
      console.log(`Got a keyup: ${e.key}`);
    },
    renderValue(value) {
      if (value === '' || typeof value === 'undefined') {
        return '???';
      }
      return parseInt(value, 10);
    },
    renderOperator(operator) {
      if (operator === 'multiply') {
        return 'x';
      }
      return '+';
    },
  },
};
</script>
<style scoped>
div.question {
}

div.top {
}
div.bottom div.operator {
}
</style>
