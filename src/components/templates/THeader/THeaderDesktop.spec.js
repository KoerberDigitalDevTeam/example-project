import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import THeaderDesktop from './THeaderDesktop.vue';

function createWrapper(options = {}) {
  return shallowMount(THeaderDesktop, {
    vuetify: new Vuetify(),
    ...options,
  });
}

describe('THeaderDesktop', () => {
  it('Should render THeaderDesktop', () => {
    const wrapper = createWrapper({
      propsData: {
        title: 'Title',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('Template:', () => {
    it('Should render the `title`', () => {
      const title = 'Random Title';
      const wrapper = createWrapper({
        propsData: {
          title,
        },
      });
      const titleElement = wrapper.find(`[data-testid=theader-desktop-title]`);
      expect(titleElement.text()).toBe(title);
    });
  });

  describe('Props Interface:', () => {
    it('Should comply with the `title` prop interface', () => {
      expect(THeaderDesktop.props.title).toMatchObject({
        type: String,
        required: true,
      });
    });
  });
});
