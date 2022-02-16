import React from "react";

export const themes = {
    light: {
      background: "silver",
    },
    dark: {
      background: "navy",
    },
  };
  
  export const ThemeContext = React.createContext(themes.dark);