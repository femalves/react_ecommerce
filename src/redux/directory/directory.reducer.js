const INITIAL_STATE = {
  sections: [
    {
      title: "necklaces",
      imageUrl:
        "https://images.unsplash.com/photo-1574244165829-9e468da599fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2280&q=80",
      id: 1,
      linkUrl: "shop/necklaces",
    },
    {
      title: "bracelets",
      imageUrl:
        "https://images.unsplash.com/photo-1530816612582-cc86fa2f4ed6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
      id: 2,
      linkUrl: "shop/bracelets",
    },
    {
      title: "earrings",
      imageUrl:
        "https://images.unsplash.com/photo-1475179593777-bd12fd56b85d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80",
      id: 3,
      linkUrl: "shop/earrings",
    },
    {
      title: "rings",
      imageUrl:
        "https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2545&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/rings",
    },
    {
      title: "other",
      imageUrl:
        "https://images.unsplash.com/photo-1574173798137-311ed747d574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/other",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
