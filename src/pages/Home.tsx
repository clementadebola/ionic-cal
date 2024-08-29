import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import {
  settingsOutline,
  calculatorOutline,
} from "ionicons/icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

const StyledCard = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 16px;
  max-width: 500px;
  min-width: 350px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardIcon = styled(IonIcon)`
  font-size: 48px;
  color: white;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  color: white;
  margin: 0;
`;

const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    margin: 0 auto;
`;

const Home: React.FC = () => {
  const history = useHistory();


  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <StyledTitle>Calculators</StyledTitle>
          <StyledButton slot="end" fill="clear">
            <IonIcon icon={settingsOutline} />
          </StyledButton>
        </IonToolbar>
      </Header>
      <IonContent fullscreen>
        <CardContainer>
          <StyledCard color="#FFA07A"  onClick={() => history.push("/calculator")}>
            <CardIcon icon={calculatorOutline} />
            <CardTitle>Calculator</CardTitle>
          </StyledCard>
          <StyledCard color="#90EE90"  onClick={() => history.push("/calculator-Pro")}>
            <CardIcon icon={calculatorOutline} />
            <CardTitle>Calculator Pro</CardTitle>
          </StyledCard>
          <StyledCard color="#BA55D3" onClick={() => history.push("/coming-soon")}>
            <CardIcon icon={calculatorOutline} />
            <CardTitle>Start Test</CardTitle>
          </StyledCard>
        </CardContainer>
      </IonContent>
    </StyledPage>
  );
};

export default Home;
