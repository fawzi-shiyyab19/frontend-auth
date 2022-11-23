import { extendTheme } from "@chakra-ui/react";
  const myTheme = extendTheme( {
color:{

    primary: {
        200: "#F0F8FF",
        800: "#FFC0CB"
    },
    secondery: {
        300: "#F0F8FF",
        700: "#FFC0CB"
    },
    authButton: {
        100: "#2A4365",
        900: "#90CDF4"
    },
    input : {
        100: "#2A4365",
        900: "#90CDF4"
    }
},
shadows: {
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
}
});

export default myTheme;