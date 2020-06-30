import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const COLLECTION_ID_MAP = {
  necklaces: 1,
  bracelets: 2,
  earrings: 3,
  rings: 4,
  other: 5,
};

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) => {
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
};
