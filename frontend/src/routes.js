import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { CorrecaoCalcioMg } from "./pages/correcoes/CorrecaoCalcioMg";
import { CorrecaoFosforo } from "./pages/correcoes/CorrecaoFosforo";
import { CorrecaoPotassio } from "./pages/correcoes/CorrecaoPotassio";
import { Dados } from "./pages/dados/Dados";
import { Teores } from "./pages/dados/Teores";
import { Home } from "./pages/Home";
import { persistor, store } from "./store";

function Routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dados" component={Dados} />
            <Route exact path="/teores" component={Teores} />
            <Route exact path="/correcao-fosforo" component={CorrecaoFosforo} />
            <Route
              exact
              path="/correcao-potassio"
              component={CorrecaoPotassio}
            />
            <Route
              exact
              path="/correcao-calciomg"
              component={CorrecaoCalcioMg}
            />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
export default Routes;
