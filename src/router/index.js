import Vue from 'vue';
import Router from 'vue-router';
import MathBuster from '@/components/MathBuster';

Vue.use(Router);

const store = {
  debug: true,
  state: {
    rightAnswers: [],
    wrongAnsewrs: [],
  },
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MathBuster',
      component: MathBuster,
      props: { state: store },
    },
  ],
});
