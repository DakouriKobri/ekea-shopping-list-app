import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./pages/WelcomePage";
import NewItemSpace from "./pages/NewItemSpace";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/new-item-form">
          <NewItemSpace />
        </Route>
        <Route path="/item-list">
          <ListPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
