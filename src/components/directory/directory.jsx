import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item";

import "./directory.scss";
class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Necklaces",
          imageUrl:
            "https://images.unsplash.com/photo-1574244165829-9e468da599fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2280&q=80",
          id: 1
        },
        {
          title: "Bracelets",
          imageUrl:
            "https://images.unsplash.com/photo-1530816612582-cc86fa2f4ed6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
          id: 2
        },
        {
          title: "Earrings",
          imageUrl:
            "https://images.unsplash.com/photo-1495846770511-520ab58b957d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
          id: 3
        },
        {
          title: "Rings",
          imageUrl:
            "https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2545&q=80",
          size: "large",
          id: 4
        },
        {
          title: "Other",
          imageUrl:
            "https://images.unsplash.com/photo-1574173798137-311ed747d574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
