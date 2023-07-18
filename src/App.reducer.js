export const initialState = {
  user: null,
  assetList: [],
  selectedAssetId: null,
  sortBy: "dateAdded",
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  return state;
};
