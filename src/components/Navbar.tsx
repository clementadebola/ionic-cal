import React from "react";
import { Link } from "react-router-dom";


import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { home, flash, statsChart, ellipsisHorizontal } from "ionicons/icons";
import '../App.css';

const Navbar = () => {
  return (
    <div>
        <IonTabs>
        <IonTabBar slot="bottom" color={"dark"}>
        <IonTabButton tab="dashboard" href="/dashboard">
          <IonIcon icon={home}  />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="strict-mode" href="/strict-mode">
          <IonIcon icon={flash} />
          <IonLabel>Strict Mode</IonLabel>
        </IonTabButton>
        <IonTabButton tab="statistics" href="/stats">
          <IonIcon icon={statsChart} />
          <IonLabel>Statistics</IonLabel>
        </IonTabButton>
        <IonTabButton tab="more" href="/more">
          <IonIcon icon={ellipsisHorizontal} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
      </IonTabBar>

        </IonTabs>
      
    </div>
  )
}

export default Navbar