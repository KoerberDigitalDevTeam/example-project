import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import ANavigationDrawer from '@/components/atoms/ANavigationDrawer/ANavigationDrawer.vue';

function createWrapper(options = {}) {
  return shallowMount(ANavigationDrawer, {
    vuetify: new Vuetify(),
    ...options,
  });
}

describe('ANavigationDrawer', () => {
  describe('Template:', () => {
    it('Should render an ANavigationDrawer', () => {
      const wrapper = createWrapper();

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('Props Interface:', () => {
    it('Should render an ANavigationDrawer with miniVariant prop', () => {
      const wrapper = createWrapper({
        miniVariant: false,
      });

      expect(wrapper.vm.$props.miniVariant).toBe(false);
    });
  });

  it('Should have miniVariant prop and must be Boolean', () => {
    expect(ANavigationDrawer.props).toMatchObject({
      miniVariant: {
        type: Boolean,
        default: false,
      },
    });
  });
});
