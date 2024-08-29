import React from 'react';
import { IonContent, IonPage, IonAvatar, IonButton, IonHeader, IonToolbar, IonIcon, IonTitle } from '@ionic/react';
import styled from 'styled-components';
import { arrowBack } from 'ionicons/icons';

const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const StyledAvatar = styled(IonAvatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  color: #b3b3b3;
  margin-bottom: 2rem;
`;

const StyledButton = styled(IonButton)`
  --background: #8e44ad;
  --border-radius: 8px;
`;

const Profile: React.FC = () => {
  return (
    <StyledPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" routerLink="/" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <StyledAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="Profile" />
          </StyledAvatar>
          <Name>Sachin Smith</Name>
          <Email>sachin.smith@example.com</Email>
          <StyledButton>Edit Profile</StyledButton>
        </Container>
      </IonContent>
    </StyledPage>
  );
};

export default Profile;