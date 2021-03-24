import Vue from 'vue';

export default Vue.directive('testId', (el, binding) => {
  const testId = [
    ...Object.keys(binding.modifiers || {}),
    binding.value || binding.expression,
  ].filter((x) => x);

  el.setAttribute('data-testid', testId.join('-'));
});
