export const initialState = {
  currentPage: "about",
  selectedProject: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  if (action.includes("CHANGE_PAGE")) {
    return {
      ...state,
      currentPage: payload,
    };
  }

  if (action.includes("SELECT_PROJECT")) {
    return {
      ...state,
      selectedProject: payload,
    };
  }

  if (action.includes("CLEAR_SELECTED_PROJECT")) {
    return {
      ...state,
      selectedProject: null,
    };
  }

  return state;
};
