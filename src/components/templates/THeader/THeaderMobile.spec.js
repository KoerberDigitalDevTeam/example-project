import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import testIdSelectors from '@/components/templates/THeader/testIdSelectors';
import THeaderMobile from '@/components/templates/THeader/THeaderMobile.vue';

function createWrapper(options = {}) {
  const localVue = createLocalVue();

  const global = {
    namespaced: true,
    state: {
      isSidebarOpen: false,
    },
    actions: {
      toggleSidebar: jest.fn(),
    },
  };

  localVue.use(Vuex);

  const store = new Vuex.Store({
    modules: {
      global,
    },
  });

  return shallowMount(THeaderMobile, {
    localVue,
    store,
    vuetify: new Vuetify(),
    ...options,
  });
}

describe('THeaderMobile', () => {
  describe('Template:', () => {
    it('Should render THeaderMobile', () => {
      const wrapper = createWrapper({
        propsData: {
          title: 'Test title',
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
    ~it('Should have the title inside the <h4>', () => {
      const wrapper = createWrapper({
        propsData: {
          title: 'Test title',
        },
      });
      const element = wrapper.find(`[data-testid=theader-mobile-title]`);

      expect(element.text()).toBe('Test title');
    });
  });

  describe('Props Interface:', () => {
    it('Should have title prop required and must be a string', () => {
      expect(THeaderMobile.props).toMatchObject({
        title: {
          type: String,
          required: true,
        },
      });
    });
  });

  describe('Watch:', () => {
    it("Should isSidebarOpenGlobal set 'isSidebarOpen' with 'newValue'", () => {
      const localThis = {
        isSidebarOpen: false,
      };

      const payload = true;

      THeaderMobile.watch.isSidebarOpenGlobal.call(localThis, payload);

      expect(localThis.isSidebarOpen).toBe(payload);
    });
  });

  describe('Methods:', () => {
    it("Should handleToggleSidebar invert 'isSidebarOpen' value and call action 'toggleSidebar'", () => {
      const localThis = {
        isSidebarOpen: false,
        toggleSidebar: jest.fn(),
      };

      THeaderMobile.methods.handleToggleSidebar.call(localThis);

      expect(localThis.isSidebarOpen).toBeTruthy();
      expect(localThis.toggleSidebar).toHaveBeenCalledWith(localThis.isSidebarOpen);
    });
  });
});
