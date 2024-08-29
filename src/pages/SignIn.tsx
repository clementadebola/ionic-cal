import React from 'react';
import { IonContent, IonPage, IonInput, IonButton } from '@ionic/react';
import styled from 'styled-components';

const StyledPage = styled(IonPage)`
  background-color: #2c2c44;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledInput = styled(IonInput)`
  --background: #3a3a5a;
  --color: white;
  --padding-start: 1rem;
  --padding-end: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const StyledButton = styled(IonButton)`
  --background: #8e44ad;
  --border-radius: 8px;
  margin-top: 2rem;
`;

const SignIn: React.FC = () => {
  return (
    <StyledPage>
      <IonContent>
        <Container>
          <Title>Sign in to Timesy</Title>
          <StyledInput placeholder="Email" type="email" />
          <StyledInput placeholder="Password" type="password" />
          <StyledButton expand="block">Sign in</StyledButton>
        </Container>
      </IonContent>
    </StyledPage>
  );
};

export default SignIn;