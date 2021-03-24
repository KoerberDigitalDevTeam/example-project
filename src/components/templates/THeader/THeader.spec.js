import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import THeader from '@/components/templates/THeader/THeader.vue';

function createWrapper(options = {}) {
  return shallowMount(THeader, {
    vuetify: new Vuetify(),
    ...options,
  });
}

describe('THeader', () => {
  describe('Snapshot', () => {
    it('Should THeader keep structure', () => {
      const wrapper = createWrapper({
        propsData: {
          title: 'Test title',
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
