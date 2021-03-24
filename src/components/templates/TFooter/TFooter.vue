<template>
  <v-footer v-testId.footer app fixed inset class="t-footer">
    <slot />
  </v-footer>
</template>

<script>
export default {
  name: 'TFooter',
};
</script>

<style scoped lang="scss">
.theme--light.t-footer {
  border-top: 1px solid $d-gray-2;
  background-color: $d-white;
  padding: 8px 24px;
  font-size: 12px;
  line-height: 16px;
  color: $d-gray-5;
}
</style>
