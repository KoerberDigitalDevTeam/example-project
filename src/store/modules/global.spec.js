import global from './global';

const { actions, mutations } = global;
const commit = jest.fn();

describe('Given global store module', () => {
  const state = {
    isSidebarOpen: false,
  };

  beforeEach(() => {
    commit.mockRestore();
  });

  describe('Mutations and Actions', () => {
    it('Should mutation TOGGLE_SIDEBAR be called with action toggleSidebar', () => {
      const data = true;

      actions.toggleSidebar({ commit }, data);

      const [type, payload] = commit.mock.calls[0];

      expect(type).toBe('TOGGLE_SIDEBAR');
      expect(payload).toBe(data);
    });
  });

  describe('State', () => {
    it('Should mutate state with mutation TOGGLE_SIDEBAR', () => {
      const data = true;

      mutations.TOGGLE_SIDEBAR(state, data);

      expect(state.isSidebarOpen).toStrictEqual(data);
    });
  });
});
