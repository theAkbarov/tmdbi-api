import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Appbar from "./containers/Appbar/Appbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from "./pages/Auth";
import Show from "./pages/Show";
import Error from "./pages/Error";
import PrivateRoute from "./services/routes/PrivateRoute";
import { AuthProvider } from "./services/context/AuthContext";
import "antd/dist/antd.css";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import TvShow from "./pages/TvShow";
import Footer from "./containers/Footer/Footer";
import Collections from "./pages/Collections";
// import { useState } from 'react';
import ActorsInfo from "./pages/ActorsInfo/ActorsInfo";
import TV from "./pages/TV";
import MobAppbar from "./containers/Mobile/MobAppbar/Appbar";
import { useState } from "react";
import { useEffect } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
import Results from "./pages/Results/Results";

function App() {
  const [mobile, setMobile] = useState(true);
  const mediaQuery = window.matchMedia("(min-width: 480px)");
  useEffect(() => {
    if (mediaQuery.matches) {
      setMobile(false);
    }
  }, []);
  return (
    <AuthProvider>
      <div className="App">
        {!mobile ? <Appbar /> : <MobAppbar />}
        <Switch>
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <PrivateRoute path="/profile" component={Account} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv/:id" component={TvShow} />
          <Route path="/tv" component={TV} />
          <Route path="/search" component={SearchPage} />
          <Route path="/results/:name" component={Results} />
          <Route path="/show/:id" component={Show} />
          <Route path="/person/:id" component={ActorsInfo} />
          <Route path="/tv-show" component={TvShows} />
          <Route path="/collection/:id" component={Collections} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
