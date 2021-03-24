import { shallowMount } from '@vue/test-utils';
import TMainPage from './TMainPage.vue';

const THeaderStub = {
  template: `<div class="THeaderStub">
    <slot name="toolbarLeft" />
    <slot name="toolbarRight" />
  </div>`,
};

function createWrapper(options = {}) {
  const wrapper = shallowMount(TMainPage, {
    ...options,
    stubs: {
      THeader: THeaderStub,
    },
  });
  return wrapper;
}

describe('TMainPage', () => {
  describe('Template', () => {
    it('Should have a section for the Header', () => {
      const wrapper = createWrapper({
        propsData: {
          title: 'Title',
        },
      });
      const headerElement = wrapper.find('[data-testid=main-page-header]');
      expect(headerElement.exists()).toBe(true);
    });

    it('Should have a section for the PageContent', () => {
      const wrapper = createWrapper({
        propsData: {
          title: 'Title',
        },
      });
      const headerElement = wrapper.find('[data-testid=main-page-page-content]');
      expect(headerElement.exists()).toBe(true);
    });

    describe('Slots:', () => {
      it('Should render the `toolbarLeft` slot', () => {
        const slotContent = 'The toolbarLeft slot';
        const wrapper = createWrapper({
          propsData: {
            title: 'Title',
          },
          slots: {
            headerToolbarLeft: slotContent,
          },
        });
        const header = wrapper.find('[data-testid=main-page-header]');
        expect(header.text()).toBe(slotContent);
      });

      it('Should render the `toolbarRight` slot', () => {
        const slotContent = 'The toolbarRight slot';
        const wrapper = createWrapper({
          propsData: {
            title: 'Title',
          },
          slots: {
            headerToolbarRight: slotContent,
          },
        });
        const header = wrapper.find('[data-testid=main-page-header]');
        expect(header.text()).toBe(slotContent);
      });

      it('Should render the `footer` slot', () => {
        const slotContent = 'The toolbarRight slot';
        const wrapper = createWrapper({
          propsData: {
            title: 'Title',
          },
          slots: {
            footer: slotContent,
          },
        });
        const footer = wrapper.find('[data-testid=main-page-footer]');
        expect(footer.text()).toBe(slotContent);
      });
    });
  });

  describe('Props Interface:', () => {
    it('Should comply with the `title` prop interface', () => {
      expect(TMainPage.props.title).toMatchObject({
        type: String,
        required: true,
      });
    });
  });
});
