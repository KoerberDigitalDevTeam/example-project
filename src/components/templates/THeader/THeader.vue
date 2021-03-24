<template>
  <component
    :is="['THeaderDesktop', 'THeaderMobile'][+$vuetify.breakpoint.mobile]"
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
  />
</template>

<script>
import THeaderDesktop from './THeaderDesktop.vue';
import THeaderMobile from './THeaderMobile.vue';

export default {
  name: 'THeader',
  components: {
    THeaderDesktop,
    THeaderMobile,
  },
};
</script>
