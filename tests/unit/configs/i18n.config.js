import * as VueTestUtils from '@vue/test-utils';

VueTestUtils.config.mocks.$t = jest.fn((key) => key);
