import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Search from "./components/Search";
import Notify from "./components/Notify";
import Profile from "./components/Profile";
import StatsPage from "./pages/StatsPage";
import More from './pages/More';
import CalculatorPro from "./pages/CalculatorPro";
import Calculator from "./pages/Calculator";
import Settings from "./components/Settings";
import PremiumPage from "./components/PremiumPage";
import ComingSoon from "./components/ComingSoon";
import Camera from "./pages/Camera";
import { home, statsChart, ellipsisHorizontal, cameraOutline } from "ionicons/icons";
import './App.css';


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";


setupIonicReact();


const App: React.FC = () => (
  <IonApp >
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
          <Route path="/signin" component={SignIn} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/search" component={Search} exact={true} />
          <Route path="/camera" component={Camera} exact={true} />
          <Route path="/notify" component={Notify} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/stats" component={StatsPage} exact={true} />
          <Route path="/more" component={More} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
          <Route path="/calculator-pro" component={CalculatorPro} exact={true} />
          <Route path="/calculator" component={Calculator} exact={true} />
          <Route path="/premium" component={PremiumPage} exact={true} />
          <Route path="/coming-soon" component={ComingSoon} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </IonRouterOutlet>


        <IonTabBar slot="bottom" color={"dark"} >
        <IonTabButton tab="dashboard" href="/home">
          <IonIcon icon={home}  />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        {/* <IonTabButton tab="Camera" href="/">
          <IonIcon icon={cameraOutline} />
          <IonLabel>Ai</IonLabel>
        </IonTabButton> */}

        <IonTabButton>
        </IonTabButton>
        
        {/* <IonTabButton tab="stats" href="/stats">
          <IonIcon icon={statsChart} />
          <IonLabel>Statistics</IonLabel>
        </IonTabButton> */}

        <IonTabButton tab="more" href="/more">
          <IonIcon icon={ellipsisHorizontal} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
      </IonTabBar>

      </IonTabs>
      <IonFab vertical="bottom" horizontal="center" slot="fixed" >
          <IonFabButton routerLink="/camera">
            <IonIcon icon={cameraOutline}></IonIcon>
          </IonFabButton>
        </IonFab>

      
    </IonReactRouter>
  </IonApp>
);

export default App;
