// src/pages/Search.tsx
import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { documentTextOutline, linkOutline } from 'ionicons/icons';
import styled from 'styled-components';

const StyledPage = styled(IonPage)`
  --ion-background-color: #1c1c1e;
  --ion-text-color: #ffffff;
`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #1c1c1e;
    --color: #ffffff;
  }
`;

const StyledSearchbar = styled(IonSearchbar)`
  --background: #2c2c2e;
  --color: #ffffff;
  --placeholder-color: #8e8e93;
  --icon-color: #8e8e93;
  --clear-button-color: #8e8e93;
  --border-radius: 10px;
`;

const StyledList = styled(IonList)`
  background: transparent;
`;

const StyledItem = styled(IonItem)`
  --background: #2c2c2e;
  --color: #ffffff;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Search: React.FC = () => {
  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </Header>
      <IonContent fullscreen>
        <StyledSearchbar placeholder="Unity Dashboard" />
        <StyledList>
          <StyledItem>
            <IonIcon icon={documentTextOutline} slot="start" />
            <IonLabel>
              <h2>Unity Dashboard</h2>
              <p>Dec 2</p>
            </IonLabel>
          </StyledItem>
          <StyledItem>
            <IonIcon icon={linkOutline} slot="start" />
            <IonLabel>
              <h2>Job Landing Page</h2>
              <p>Dec 5</p>
            </IonLabel>
          </StyledItem>
          <StyledItem>
            <IonIcon icon={documentTextOutline} slot="start" />
            <IonLabel>
              <h2>Unity Gaming</h2>
              <p>Nov 8</p>
            </IonLabel>
          </StyledItem>
          <StyledItem>
            <IonIcon icon={documentTextOutline} slot="start" />
            <IonLabel>
              <h2>Unity Dashboard</h2>
              <p>Dec 2</p>
            </IonLabel>
          </StyledItem>
        </StyledList>
      </IonContent>
    </StyledPage>
  );
};

export default Search;