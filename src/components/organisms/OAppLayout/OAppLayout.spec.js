import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import OAppLayout from '@/components/organisms/OAppLayout/OAppLayout.vue';

Vue.use(VueRouter);

let vuetify;

function createWrapper(options = {}) {
  const wrapper = shallowMount(OAppLayout, {
    vuetify,
    ...options,
  });
  return wrapper;
}

beforeEach(() => {
  vuetify = new Vuetify();
});

describe('OAppLayout', () => {
  describe('Template:', () => {
    it('Should render a OAppLayout', () => {
      const wrapper = createWrapper();
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should have a section for PageContainer', () => {
      const wrapper = createWrapper();
      const pageContainerElement = wrapper.find('[data-testid=app-layout-page-content]');
      expect(pageContainerElement.exists()).toBe(true);
    });
  });
});
