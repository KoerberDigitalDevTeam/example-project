<template>
  <div class="theader-mobile--sticky">
    <div class="theader-mobile">
      <AButton
        v-testId.theader.mobile-button
        :tertiary="true"
        icon
        color="dWhite"
        class="theader-mobile__button mr-6"
        data-testid="btn-mob-header-open"
        @click.stop="handleToggleSidebar"
      >
        <v-icon>mdi-menu</v-icon>
      </AButton>

      <v-list-item-title v-testId.theader.mobile-title class="theader-mobile__title">
        <h4>{{ title }}</h4>
      </v-list-item-title>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AButton from '@/components/atoms/AButton/AButton.vue';

export default {
  name: 'THeaderMobile',
  components: {
    AButton,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    ...mapState({
      isSidebarOpenGlobal: (state) => state.global.isSidebarOpen,
    }),
  },

  watch: {
    isSidebarOpenGlobal(newValue) {
      this.isSidebarOpen = newValue;
    },
  },

  methods: {
    ...mapActions({ toggleSidebar: 'global/toggleSidebar' }),
    handleToggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.toggleSidebar(this.isSidebarOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
.theader-mobile {
  display: flex;
  background: $d-black;
  color: $d-white;
  padding: 4px 0 4px 20px;
  overflow: hidden;
}

.theader-mobile--sticky {
  position: sticky;
  top: 0;
  z-index: 4;
}
</style>
