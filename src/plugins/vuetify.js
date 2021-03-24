import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from '@/styles/base/_colors.scss';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'sm',
  },
  icons: {
    iconFont: 'mdiSvg',
  },
  theme: {
    ...colors,
    themes: {
      light: {
        primary: colors.dPrimary,
        ...colors,
      },
    },
  },
});
