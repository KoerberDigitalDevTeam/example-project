<template>
  <div class="t-main-page">
    <THeader v-testId.main-page.header class="t-main-page__t-header" :title="title">
      <template slot="toolbarLeft">
        <slot name="headerToolbarLeft" />
      </template>
      <template slot="toolbarRight">
        <slot name="headerToolbarRight" />
      </template>
    </THeader>
    <div v-testId.main-page.page-content class="t-main-page_page-content">
      <slot />
    </div>
    <TFooter v-show="this.$slots.footer" v-testId.main-page.footer class="t-main-page__t-footer">
      <template>
        <slot name="footer" />
      </template>
    </TFooter>
  </div>
</template>

<script>
import TFooter from '@/components/templates/TFooter/TFooter.vue';
import THeader from '@/components/templates/THeader/THeader.vue';

export default {
  name: 'TMainPage',

  components: {
    TFooter,
    THeader,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.t-main-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.t-main-page_page-content {
  flex: 1;
}
</style>
