import vtrSnip from "../assets/vtrSnip.png";
import pomuSnip from "../assets/pomuSnip.png";

export const pages = ["about", "projects", "contacts"];

export const projects = [
  {
    projectKey: "vtr",
    title: "Asset Resource App",
    description:
      "A full-stack project for a community-driven resource aggregator. Uses Auth0 for user authentication and session management and MongoDB for record storage.",
    image: vtrSnip,
    source: "https://github.com/powch/vtr-api",
  },
  {
    projectKey: "pomu",
    title: "I'm Pomu!",
    description:
      "A fun little app that uses modeled facial recognition to overlay assets on top of desired images. The API for this uses some cool buffer encoding and it was interesting to implement.",
    image: pomuSnip,
    source: "https://github.com/powch/impomu",
  },
];
