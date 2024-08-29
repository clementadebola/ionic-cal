import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { arrowBack } from 'ionicons/icons';
import { personCircle } from "ionicons/icons";
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

const StyledList = styled(IonList)`
  background: transparent;
`;

const StyledItem = styled(IonItem)`
  --background: transparent;
  --color: #ffffff;
  --border-color: rgba(255, 255, 255, 0.1);
`;

const NotificationText = styled.p`
  margin: 0;
  color: #8e8e93;
`;

const Notify: React.FC = () => {
  return (
    <StyledPage>
      <Header>
        <IonToolbar>
        <IonButton slot="start" routerLink="/" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <IonTitle>Notifications</IonTitle>
          <IonIcon icon={personCircle} slot="end" size="large" />
        </IonToolbar>
      </Header>
      <IonContent fullscreen>
        <StyledList>
          <StyledItem>
            <IonAvatar slot="start">
              <img src="https://picsum.photos/100" alt="Benjamin Poole" />
            </IonAvatar>
            <IonLabel>
              <h2>Benjamin Poole</h2>
              <NotificationText>
                When you have time, can you review the latest project files?
              </NotificationText>
              <p>Nov 20th</p>
            </IonLabel>
          </StyledItem>
          <StyledItem>
            <IonAvatar slot="start">
              <img src="https://picsum.photos/101" alt="Katherine Wells" />
            </IonAvatar>
            <IonLabel>
              <h2>Katherine Wells</h2>
              <NotificationText>
                Team meeting scheduled for tomorrow at 10 AM
              </NotificationText>
              <p>Nov 20th</p>
            </IonLabel>
          </StyledItem>
          <StyledItem>
            <IonAvatar slot="start">
              <img src="https://picsum.photos/102" alt="Bertha Barnes" />
            </IonAvatar>
            <IonLabel>
              <h2>Bertha Barnes</h2>
              <NotificationText>
                Are you planning to attend the conference next month?
              </NotificationText>
              <p>Nov 20th</p>
            </IonLabel>
          </StyledItem>
          <StyledItem>
            <IonAvatar slot="start">
              <img src="https://picsum.photos/103" alt="Marie Brown" />
            </IonAvatar>
            <IonLabel>
              <h2>Marie Brown</h2>
              <NotificationText>
                New task assigned: Update product documentation
              </NotificationText>
              <p>Nov 20th</p>
            </IonLabel>
          </StyledItem>
        </StyledList>
      </IonContent>
    </StyledPage>
  );
};

export default Notify;
