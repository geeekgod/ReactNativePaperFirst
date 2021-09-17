import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import MainStack from "./src/navigation/MainStack";
import { RootReducer } from "./src/redux/reducers/rootReducer";
import BottomTab from "./src/navigation/BottomTab";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgba(193, 12, 153, 1)",
  },
};

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        {/* <MainStack /> */}
        <BottomTab />
      </PaperProvider>
    </Provider>
  );
}
