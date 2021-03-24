<template>
  <v-navigation-drawer
    v-testId.navigation-drawer
    :permanent="!$vuetify.breakpoint.mobile"
    touchless
    class="a-navigation-drawer"
    v-bind="[$attrs, $props]"
    v-on="$listeners"
  >
    <slot />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'ANavigationDrawer',

  props: {
    miniVariant: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
