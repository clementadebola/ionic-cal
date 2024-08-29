import React from 'react';
import {
  IonContent,
  IonPage,
  IonIcon,
  IonTitle,
  IonButton,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import { settingsOutline, arrowBack } from "ionicons/icons";
import styled from "styled-components";

const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #090b22;
    --color: #ffffff;
    padding: 10px 10px;
    margin: 0 auto;
  }
`;

const StyledTitle = styled(IonTitle)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledButton = styled(IonButton)`
  --color: #ffffff;
`;
const CalculatorPro: React.FC = () => {
  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonButton slot="start" routerLink="/" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <StyledTitle>Calculator Pro</StyledTitle>
          <StyledButton slot="end" fill="clear">
            <IonIcon icon={settingsOutline} />
          </StyledButton>
        </IonToolbar>
      </Header>

      <IonContent fullscreen>
        <IonTitle>hello</IonTitle>
      </IonContent>
    </StyledPage>
  );
};

export default CalculatorPro;
