import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { star, checkmarkOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { arrowBack } from 'ionicons/icons';

const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;


const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #4a00e0;
    --color: #ffffff;
    padding: 10px 10px;
    margin: 0 auto;
  }
`;

const SubscriptionCard = styled(IonCard)`
  --background: #F4F4F8;
  border-radius: 16px;
  margin: 20px;
  padding: 16px;
`;

const SubscriptionTitle = styled(IonCardTitle)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubscriptionSubtitle = styled(IonCardSubtitle)`
  font-size: 18px;
  color: #888888;
  margin-bottom: 20px;
`;

const SubscriptionFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  ion-icon {
    color: #4a00e0;
    margin-right: 10px;
  }
`;

const PremiumPage: React.FC = () => {
  return (
    <StyledPage>
      <Header>
        <IonToolbar>
        <IonButton slot="start" routerLink="/more" fill="clear">
            <IonIcon icon={arrowBack} color="light"/>
          </IonButton>
          <IonTitle>Premium Subscription</IonTitle>
        </IonToolbar>
      </Header>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size-md="6" offset-md="3">
              <SubscriptionCard>
                <IonCardHeader>
                  <SubscriptionTitle>Focus Premium 💎</SubscriptionTitle>
                  <SubscriptionSubtitle>Unlock ultimate productivity</SubscriptionSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <SubscriptionFeature>
                    <IonIcon icon={checkmarkOutline} />
                    Unlimited focus sessions
                  </SubscriptionFeature>
                  <SubscriptionFeature>
                    <IonIcon icon={checkmarkOutline} />
                    Advanced analytics and insights
                  </SubscriptionFeature>
                  <SubscriptionFeature>
                    <IonIcon icon={checkmarkOutline} />
                    Customizable break schedules
                  </SubscriptionFeature>
                  <SubscriptionFeature>
                    <IonIcon icon={checkmarkOutline} />
                    Priority customer support
                  </SubscriptionFeature>
                  <SubscriptionFeature>
                    <IonIcon icon={star} />
                    Exclusive premium features
                  </SubscriptionFeature>

                  <IonButton expand="block" color="primary">
                    Subscribe Now 💳
                  </IonButton>
                </IonCardContent>
              </SubscriptionCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </StyledPage>
  );
};

export default PremiumPage;