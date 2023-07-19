export const initialState = {
  currentPage: "about",
  selectedProject: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  if (action.includes("CHANGE_PAGE")) {
    console.log({ action, payload });
    return {
      ...state,
      currentPage: payload,
    };
  }

  return state;
};
