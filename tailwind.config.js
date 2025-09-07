const px0_10 = Array.from(Array(11), (_, i) => [`${i}`, `${i}px`]).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

const px0_100 = Array.from(Array(101), (_, i) => [`${i}`, `${i}px`]).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

const px0_200 = Array.from(Array(201), (_, i) => [`${i}`, `${i}px`]).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

const px0_500 = Array.from(Array(501), (_, i) => [`${i}`, `${i}px`]).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      borderRadius: px0_100,
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      margin: px0_100,
      padding: px0_100,
      gap: px0_10,
      width: px0_200,
      height: px0_500,
      colors: {
        primary: "#77BEF0",
        secondary: "#",
      },
    },
  },
  plugins: [],
};
