import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import AButton from './AButton.vue';

describe('AButton', () => {
  function createWrapper(options = {}) {
    return shallowMount(AButton, {
      vuetify: new Vuetify(),
      ...options,
    });
  }

  describe('Template:', () => {
    it('Should render a AButton', () => {
      const wrapper = createWrapper();

      expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should have a default slot', () => {
      const wrapper = createWrapper({
        slots: {
          default: 'default',
        },
      });

      expect(wrapper.text()).toContain('default');
    });
  });

  describe('Props Interface:', () => {
    it('Should have disabled prop required and must be a Boolean', () => {
      expect(AButton.props).toMatchObject({
        disabled: {
          type: Boolean,
          default: false,
        },
      });
    });

    it('Should have primary prop and must be a Boolean', () => {
      expect(AButton.props).toMatchObject({
        primary: {
          type: Boolean,
          default: true,
        },
      });
    });

    it('Should have secondary prop and must be a Boolean', () => {
      expect(AButton.props).toMatchObject({
        secondary: {
          type: Boolean,
        },
      });
    });

    it('Should have tertiary prop and must be a Boolean', () => {
      expect(AButton.props).toMatchObject({
        tertiary: {
          type: Boolean,
        },
      });
    });
    it('Should have color prop and must be a String', () => {
      expect(AButton.props).toMatchObject({
        color: {
          type: String,
          default: undefined,
        },
      });
    });
  });

  describe('Computed:', () => {
    const primaryTheme = {
      color: 'primary',
      outlined: false,
      text: false,
    };

    const secondaryTheme = {
      color: 'dPrimary',
      outlined: true,
      text: false,
    };

    const tertiaryTheme = {
      color: 'dPrimary',
      outlined: false,
      text: true,
    };

    describe('currentTheme', () => {
      it('When the `primary` prop is true then Should return the `primaryTheme`', () => {
        const localThis = {
          primary: true,
          primaryTheme,
        };
        const result = AButton.computed.currentTheme.call(localThis);
        expect(result).toBe(primaryTheme);
      });

      it('When the `secondary` prop is true then Should return the `secondaryTheme`', () => {
        const localThis = {
          primary: false,
          secondary: true,
          secondaryTheme,
        };
        const result = AButton.computed.currentTheme.call(localThis);
        expect(result).toBe(secondaryTheme);
      });

      it('When the `tertiary` prop is true then Should return the `tertiaryTheme`', () => {
        const localThis = {
          primary: false,
          tertiary: true,
          tertiaryTheme,
        };
        const result = AButton.computed.currentTheme.call(localThis);
        expect(result).toBe(tertiaryTheme);
      });
    });

    describe('getColor:', () => {
      it('When the `primary` prop is true then Should return the default color', () => {
        const localThis = {
          primary: true,
          currentTheme: primaryTheme,
        };
        const result = AButton.computed.getColor.call(localThis);
        expect(result).toBe('primary');
      });

      it('When the `primary` prop is false then Should return the alternative color', () => {
        const localThis = {
          primary: true,
          currentTheme: secondaryTheme,
        };
        const result = AButton.computed.getColor.call(localThis);
        expect(result).toBe('dPrimary');
      });

      it('When the `color` prop is valid then Should return the color value passed by prop', () => {
        const localThis = {
          color: 'test',
        };
        const result = AButton.computed.getColor.call(localThis);
        expect(result).toBe('test');
      });
    });

    describe('getOutlined:', () => {
      it('When the `secondary` prop is true then Should return true', () => {
        const localThis = {
          primary: true,
          currentTheme: secondaryTheme,
        };
        const result = AButton.computed.getOutlined.call(localThis);
        expect(result).toBe(true);
      });

      it('When the `secondary` prop is false then Should return false', () => {
        const localThis = {
          primary: true,
          currentTheme: primaryTheme,
        };
        const result = AButton.computed.getOutlined.call(localThis);
        expect(result).toBe(false);
      });
    });

    describe('getText:', () => {
      it('When the `tertiary` prop is true then Should return true', () => {
        const localThis = {
          primary: true,
          currentTheme: tertiaryTheme,
        };
        const result = AButton.computed.getText.call(localThis);
        expect(result).toBe(true);
      });

      it('When the `tertiary` prop is false then Should return false', () => {
        const localThis = {
          primary: true,
          currentTheme: primaryTheme,
        };
        const result = AButton.computed.getText.call(localThis);
        expect(result).toBe(false);
      });
    });
  });
});
