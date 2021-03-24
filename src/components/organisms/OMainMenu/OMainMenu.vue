<template>
  <div>
    <ANavigationDrawer
      v-model="navDrawer"
      v-testId.main-menu
      app
      color="dBlack"
      :mini-variant="isCollapsed"
      class="o-main-menu__a-navigation-drawer"
      @update:mini-variant="handleCollapseMenu"
    >
      <div class="o-main-menu__header">
        <div v-testId.main-menu.header class="o-main-menu__header-logo">
          <div v-if="!isCollapsed">
            <img v-testId.main-menu.app-logo :src="logo" alt="logo" class="o-main-menu__logo" />
          </div>
        </div>

        <v-list-item class="o-main-menu__header-user-profile">
          <v-list-item-avatar
            v-testId.main-menu.profile-avatar
            min-width="33"
            width="33"
            height="33"
            class="o-main-menu__header-user-avatar"
          >
            <v-icon color="dWhite" large>mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-title v-testId.main-menu.user-name class="o-main-menu__user">
            {{ userName }}
          </v-list-item-title>

          <AButton
            v-show="!$vuetify.breakpoint.mobile"
            v-testId.main-menu.collapse-btn
            class="o-main-menu__collapse-menu-button"
            icon
            color="dWhite"
            :tertiary="true"
            @click.stop="handleCollapseMenu"
          >
            <template>
              <v-icon>mdi-chevron-left</v-icon>
            </template>
          </AButton>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list dense class="o-main-menu__list">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          v-testId.main-menu.menu-item
          :to="item.path"
          active-class="o-main-menu__item--active"
          link
          class="o-main-menu__item"
        >
          <v-list-item-icon class="m-menu_items-icon">
            <v-icon v-testId.main-menu.menu-item-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-testId.main-menu.menu-item-title class="o-main-menu__item-title">
              {{ $t(item.title) }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </ANavigationDrawer>
  </div>
</template>

<script>
import { mdiAccountCircle, mdiChevronLeft } from '@mdi/js';
import { mapState, mapActions } from 'vuex';
import logo from '@/assets/images/koerber_logo_rgb_white.svg';
import AButton from '@/components/atoms/AButton/AButton.vue';
import ANavigationDrawer from '@/components/atoms/ANavigationDrawer/ANavigationDrawer.vue';

export default {
  name: 'OMainMenu',

  components: {
    AButton,
    ANavigationDrawer,
  },

  props: {
    userName: {
      type: String,
      default: '',
    },
    menuItems: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      logo,
      isCollapsed: false,
      mdiAccountCircle,
      mdiChevronLeft,
      navDrawer: false,
    };
  },

  computed: {
    ...mapState({
      isSidebarOpenGlobal: (state) => state.global.isSidebarOpen,
    }),
  },

  watch: {
    isSidebarOpenGlobal(newValue) {
      this.navDrawer = newValue;
    },

    navDrawer(newValue) {
      this.toggleSidebar(newValue);
    },
  },

  methods: {
    ...mapActions({ toggleSidebar: 'global/toggleSidebar' }),
    handleCollapseMenu() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .theme--light.v-navigation-drawer .v-divider {
    .theme--light.v-divider {
      color: $d-white;
    }
  }

  .v-list--dense .v-list-item .v-list-item__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    padding-right: 11px;
  }
}

.o-main-menu__header {
  .o-main-menu__header-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px 36px;
    height: 88px;
  }

  .o-main-menu__logo {
    height: 40px;
    width: 68px;
  }

  .o-main-menu__header-user-profile {
    height: 73px;
    padding: 0 11px;

    --color: #{$d-white};
    --icon-size: 33px;

    .o-main-menu__header-user-avatar {
      margin-right: 12px;
    }
  }

  .o-main-menu__user {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: $d-white;
    padding-right: 16px;
  }

  .o-main-menu__collapse-menu-button {
    --color: #{$d-white};
    width: 40px; // TODO: Check why the button component don't use this style.
  }
}

.o-main-menu__a-navigation-drawer .o-main-menu__list {
  .o-main-menu__item {
    --color: #{$d-white};

    &.v-list-item--active {
      --color: #{$d-black};
    }

    &:not(.v-list-item--active):not(.v-list-item--disabled) {
      & .v-list-item__title {
        color: $d-white;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    .m-menu_items-icon {
      width: 56px;
      height: 56px;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    &.o-main-menu__item--active {
      background-color: $d-white;
      color: $d-black;

      &::before {
        opacity: 0;
      }
    }
  }
}

.o-main-menu__list {
  padding: 0;

  .v-list-item {
    padding: 0;
  }
}
</style>
