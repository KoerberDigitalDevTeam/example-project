<template>
  <div class="theader-desktop__container">
    <h3 v-testId.theader-desktop.title class="theader-desktop__title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'THeaderDesktop',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.theader-desktop__container {
  padding: 16px 0 16px 24px;
}
</style>
