const plugin = require("tailwindcss/plugin");

// Genera las variantes de cada color para los iconos
module.exports = plugin(function ({ addComponents, theme, add }) {
  const iconComponent = Object.entries(theme("colors"))
    .map(([color, values]) => {
      const base =
        typeof values !== "string"
          ? {
              [`use.icon-${color}`]: {
                "--color-base": `theme("colors.${color}.600")`,
                "--color-shape": `theme("colors.${color}.300")`,
              },
            }
          : {
              [`use.icon-${color}`]: {
                "--color-base": `${values}`,
                "--color-shape": `${values}`,
              },
            };

      const colors = Object.entries(values)
        .map(
          ([variant, value]) =>
            value && {
              [`use.icon-${color}-${variant}`]: {
                "--color-base": `${value}`,
              },
              [`use.icon-shape-${color}-${variant}`]: {
                "--color-shape": `${value}`,
              },
            }
        )
        .reduce((a, b) => Object.assign({}, a, b));
      return { ...base, ...colors };
    })
    .reduce((a, b) => Object.assign({}, a, b));
  addComponents({ ...iconComponent, "@variants hover": iconComponent });
});
