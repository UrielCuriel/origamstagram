const IconComponent = require("./tailwind/icon");
module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        profile: "32px",
        story: "36px",
        user: "42px",
      },
      gridTemplateColumns: {
        container: "minmax(auto,936px)",
        content: "3fr 1fr",
      },
    },
    fontFamily: {
      body: ["Lato", "sans-serif"],
      logo: ["Pacifico", "sans-serif"],
    },
  },
  variants: {},
  plugins: [IconComponent],
};
