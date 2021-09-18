import * as React from "react";
import {
  DefaultTheme as PaperTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./src/redux/reducers/rootReducer";
import BottomTab from "./src/navigation/BottomTab";
import { DefaultTheme as NavigationTheme } from "@react-navigation/native";
import merge from "deepmerge";

const paperTheme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    primary: "rgba(193, 12, 153, 1)",
  },
};

const navigationTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    primary: "rgba(193, 12, 153, 1)",
  },
};
const theme = merge(paperTheme, navigationTheme);

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <BottomTab newTheme={theme} />
      </PaperProvider>
    </Provider>
  );
}
