<template>
  <v-btn
    v-testId.btn
    v-bind="[$props, $attrs]"
    class="a-btn"
    rounded
    :color="getColor"
    :outlined="getOutlined"
    :text="getText"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    primary: {
      type: Boolean,
      default: true,
    },

    secondary: {
      type: Boolean,
    },

    tertiary: {
      type: Boolean,
    },

    color: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    primaryTheme() {
      return {
        color: 'primary',
        outlined: false,
        text: false,
      };
    },

    secondaryTheme() {
      return {
        color: 'dPrimary',
        outlined: true,
        text: false,
      };
    },

    tertiaryTheme() {
      return {
        color: 'dPrimary',
        outlined: false,
        text: true,
      };
    },

    currentTheme() {
      if (this.tertiary) {
        return this.tertiaryTheme;
      }
      if (this.secondary) {
        return this.secondaryTheme;
      }

      return this.primaryTheme;
    },

    getColor() {
      return this.color || this.currentTheme.color;
    },

    getOutlined() {
      return this.currentTheme.outlined;
    },

    getText() {
      return this.currentTheme.text;
    },
  },
};
</script>
<style lang="scss" scoped>
.a-btn {
  text-transform: none;

  ::v-deep .v-btn__content {
    font-family: Koerber, sans-serif;
    font-weight: 700;
    font-size: 13px;
  }
}
</style>
