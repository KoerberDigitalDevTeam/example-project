<template>
  <TMainPage v-testId.example-page :title="$t('examplePage.title')">
    <div v-testId.example-page.content class="p-example__content">
      {{ $t('examplePage.content') }}
    </div>
    <template #footer v-testId.example-page.footer>{{ $t('examplePage.footer') }}</template>
  </TMainPage>
</template>

<script>
import TMainPage from '@/components/templates/TMainPage/TMainPage.vue';

export default {
  name: 'PExample',

  components: {
    TMainPage,
  },
};
</script>

<style lang="scss" scoped>
.p-example__content {
  display: flex;
  height: 100%;
}
</style>
