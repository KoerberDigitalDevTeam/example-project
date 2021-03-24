import { shallowMount } from '@vue/test-utils';
import TFooter from './TFooter.vue';

function createWrapper(options = {}) {
  return shallowMount(TFooter, {
    ...options,
  });
}

describe('TFooter', () => {
  it('Should render TFooter with default slot', () => {
    const wrapper = createWrapper({
      slots: {
        default: 'Slot Content',
      },
    });

    expect(wrapper.html()).toContain('Slot Content');
  });
});
