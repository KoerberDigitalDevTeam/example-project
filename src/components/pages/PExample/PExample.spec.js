import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import PExample from './PExample.vue';

function createWrapper(options = {}) {
  return shallowMount(PExample, {
    vuetify: new Vuetify(),
    ...options,
  });
}

describe('PExample', () => {
  it('Should render PExample', () => {
    const wrapper = createWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
