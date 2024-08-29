import React from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import styled from 'styled-components';

const StyledPage = styled(IonPage)`
  background-color: #2c2c44;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled(IonButton)`
  --background: #8e44ad;
  --border-radius: 8px;
  margin-top: 2rem;
`;

const TaskCompletion: React.FC = () => {
  return (
    <StyledPage>
      <IonContent>
        <Container>
          <Title>Wohoo!</Title>
          <p>You have completed all tasks</p>
          <StyledButton>Take a break</StyledButton>
        </Container>
      </IonContent>
    </StyledPage>
  );
};

export default TaskCompletion;