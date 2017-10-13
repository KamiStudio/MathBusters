<template>
  <div class="interface">
    MathBusters
		<question v-bind:operator="multiply" v-bind:value1="12" v-bind:value2="34"/>
  </div>
</template>

<script>

import Question from '@/components/Question';

export default {
  name: 'MathBuster',
  props: ['state'],
  data() {
    return {};
  },
  methods: {
    handleNew(e) {
      e.preventDefault();
    },
    handleAnswers(e) {
      e.preventDefault();
    },
  },
  components: { question: Question },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
