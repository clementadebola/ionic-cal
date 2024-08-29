import React from 'react';
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonToolbar,
  IonIcon,
  IonHeader,
} from '@ionic/react';
import styled from 'styled-components';
import { arrowBack } from 'ionicons/icons';

const StyledPage = styled(IonPage)`
  --ion-background-color: #090B22;
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


const HeaderCard = styled(IonCard)`
  --background: linear-gradient(90deg, #8e2de2, #4a00e0);
  border-radius: 16px;
  margin: 20px;
  padding: 40px 20px;
  text-align: center;
`;

const EmojiContainer = styled.div`
  font-size: 80px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const SubscribeCard = styled(IonCard)`
  --background: #ffffff;
  border-radius: 16px;
  margin: 20px;
  padding: 20px;
  text-align: center;
`;

const SubscribeButton = styled(IonButton)`
  --background: #4a00e0;
  --color: #ffffff;
  --border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
`;

const ComingSoon: React.FC = () => {
  return (
    <StyledPage>
        <Header>
        <IonToolbar>
        <IonButton slot="start" routerLink="/" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          {/* <IonTitle></IonTitle> */}
        </IonToolbar>
      </Header>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size-md="6" offset-md="3">
              <HeaderCard>
                <IonCardHeader>
                  <IonCardTitle>Coming Soon 🔜</IonCardTitle>
                  <IonCardSubtitle>Get ready for our exciting new app</IonCardSubtitle>
                </IonCardHeader>

                <EmojiContainer>🤔</EmojiContainer>
              </HeaderCard>

              <SubscribeCard>
                <IonCardTitle>Stay Informed</IonCardTitle>
                <IonCardSubtitle>Subscribe to our updates and be the first to know!</IonCardSubtitle>

                <SubscribeButton>Subscribe Now</SubscribeButton>
              </SubscribeCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </StyledPage>
  );
};

export default ComingSoon;
