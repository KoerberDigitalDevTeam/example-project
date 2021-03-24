<template>
  <v-app v-testId.app-layout class="o-app-layout__app">
    <OMainMenu v-testId.app-layout.main-menu user-name="Admin" :menu-items="menuItems" />
    <v-main>
      <v-container
        v-testId.app-layout.page-content
        fluid
        class="o-app-layout__page-container"
        user-name="Admin"
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import OMainMenu from '@/components/organisms/OMainMenu/OMainMenu.vue';

export default {
  name: 'OAppLayout',

  components: {
    OMainMenu,
  },

  data() {
    return {
      menuItems: [
        {
          title: 'examplePage.title',
          path: '/',
          icon: 'mdi-domain',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .o-app-layout__page-container {
    height: 100%;
    max-height: 100vh;
    padding: 0;
  }
}
</style>
