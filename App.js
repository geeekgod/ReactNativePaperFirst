import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import MainStack from "./src/navigation/MainStack";
import TopBar from "./src/navigation/TopTab";
import { RootReducer } from "./src/redux/reducers/rootReducer";
import App from "./src/screens/App/App";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainStack />
        {/* <TopBar/> */}
      </PaperProvider>
    </Provider>
  );
}
