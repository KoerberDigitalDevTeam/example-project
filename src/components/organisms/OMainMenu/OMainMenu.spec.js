import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import OMainMenu from '@/components/organisms/OMainMenu/OMainMenu.vue';

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

  return shallowMount(OMainMenu, {
    localVue,
    store,
    vuetify: new Vuetify(),
    ...options,
  });
}

describe('OMainMenu', () => {
  const menuItems = [
    { path: '/test', icon: 'test', title: 'test' },
    { path: '/test2', icon: 'test2', title: 'test' },
  ];

  describe('Template:', () => {
    describe('Header', () => {
      it('Should render OMainMenu', () => {
        const wrapper = createWrapper({
          propsData: {
            menuItems,
          },
        });

        expect(wrapper.html()).toMatchSnapshot();
      });

      it('Should have a user name in user profile area', () => {
        const wrapper = createWrapper({
          propsData: {
            userName: 'user',
            menuItems,
          },
        });
        const element = wrapper.find('[data-testid=main-menu-user-name]');
        expect(element.text()).toBe('user');
      });
    });

    describe('Content', () => {
      const wrapper = createWrapper({
        propsData: {
          menuItems,
        },
      });

      it('Should render an menu item for each menu items', () => {
        const elements = wrapper.findAll('[data-testid=main-menu-menu-item]');
        expect(elements).toHaveLength(menuItems.length);
      });

      it('Should render each menu item with path', () => {
        const element = wrapper.find('[data-testid=main-menu-menu-item]');
        expect(element.vm.to).toContain(menuItems[0].path);
      });

      it('Should render each menu item with icon', () => {
        const element = wrapper.find('[data-testid=main-menu-menu-item-icon]');
        expect(element.text()).toBe(menuItems[0].icon);
      });

      it('Should render each menu item with title', () => {
        const element = wrapper.find('[data-testid=main-menu-menu-item-title]');
        expect(element.text()).toContain(menuItems[0].title);
      });
    });
  });

  describe('Props Interface:', () => {
    it('Should have userName prop and must be a string', () => {
      expect(OMainMenu.props).toMatchObject({
        userName: {
          type: String,
          default: '',
        },
      });
    });

    it('Should have menuItems prop and must be a array', () => {
      expect(OMainMenu.props).toMatchObject({
        menuItems: {
          type: Array,
          required: true,
        },
      });
    });
  });

  describe('Watch:', () => {
    it("Should isSidebarOpenGlobal set 'navDrawer' with 'newValue'", () => {
      const localThis = {
        navDrawer: false,
      };

      const payload = true;

      OMainMenu.watch.isSidebarOpenGlobal.call(localThis, payload);

      expect(localThis.navDrawer).toBe(payload);
    });

    it("Should navDrawer send action 'toggleSidebar' with 'newValue'", () => {
      const localThis = {
        toggleSidebar: jest.fn(),
      };

      const payload = true;

      OMainMenu.watch.navDrawer.call(localThis, payload);

      expect(localThis.toggleSidebar).toHaveBeenCalledWith(payload);
    });
  });

  describe('Methods:', () => {
    it('Should return true when the menu is collapsed', async () => {
      const localThis = {
        isCollapsed: false,

        menuItems,
      };

      OMainMenu.methods.handleCollapseMenu.call(localThis);
      expect(localThis.isCollapsed).toBe(true);
    });

    it('Should return false when the menu is expanded', async () => {
      const localThis = {
        isCollapsed: true,
        menuItems,
      };

      OMainMenu.methods.handleCollapseMenu.call(localThis);
      expect(localThis.isCollapsed).toBe(false);
    });
  });
});
