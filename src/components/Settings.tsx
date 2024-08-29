import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import styled from 'styled-components';


const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;

const StyledList = styled(IonList)`
  padding: 20px;
`;

const Settings: React.FC = () => {
  return (
    <StyledPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" routerLink="/more" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <StyledList>
          <IonItem>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" />
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonToggle slot="end" checked />
          </IonItem>
          <IonItem>
            <IonLabel>Focus Session Duration</IonLabel>
            <IonSelect value="25">
              <IonSelectOption value="15">15 minutes</IonSelectOption>
              <IonSelectOption value="25">25 minutes</IonSelectOption>
              <IonSelectOption value="40">40 minutes</IonSelectOption>
            </IonSelect>
          </IonItem>
        </StyledList>
      </IonContent>
    </StyledPage>
  );
};

export default Settings;