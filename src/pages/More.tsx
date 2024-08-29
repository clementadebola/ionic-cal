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
  IonText,
  IonCard,
  IonRow,
  IonCol,
  IonApp,
} from "@ionic/react";
import {
  personCircle,
  library,
  arrowForwardSharp,
  diamond,
  settings,
  help,
  bonfire,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  logoTiktok,
} from "ionicons/icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledPage = styled(IonPage)`
  --ion-background-color: #090B22;
  --ion-text-color: #ffffff;

`;

const Header = styled(IonHeader)`
  ion-toolbar {
    --background: #090B22;
    --color: #ffffff;
  }
`;

const StyledHead = styled.div``;

const StyledSignInHead = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  ion-text {
    font-size: 19px;
    text-align: center;
  }

  ion-label{

  &:hover{
  color: #504EBD;
  }
  }
`;

const StyledHeadCard = styled.div`
  ion-card {
    width: 90%;
    border-radius: 16px;
    --background: #1c1c1e;
    margin: 0 auto 20px;
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
  }

  ion-icon {
    font-size: 24px;
  }
`;

const StyledCardText = styled.div`
  margin-bottom: 10px;
  padding: 0 16px;
`;

const StyledCard = styled.div`
  ion-card {
    width: 90%;
    border-radius: 16px;
    --background: #1c1c1e;
    margin: 0 auto 20px;
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
  }

  ion-label {
    font-size: 17px;
    color: #fff;
  }

  ion-icon {
    color: gold;
    font-size: 24px;
  }
`;

const StyledList = styled.div``;

const StyledFooter = styled.div`
  padding: 16px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 16px;

  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    ion-icon {
      font-size: 24px;
      margin: 0 8px;
      cursor: pointer;
    }
  }

  p {
    font-size: 14px;
    color: #999;

    a {
      color: #999;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const More = () => {
  const history = useHistory();
  const handleSignIn = () => {
    history.push("/signin");
    };
  return (
    <IonApp>
      <StyledPage>
        <Header>
          <IonToolbar>
            <IonTitle>More</IonTitle>
          </IonToolbar>
        </Header>
        <IonContent fullscreen>
          <StyledHead>
            <StyledSignInHead>
              <IonText>
                you are not signed in, some features will not be available.
              </IonText>
              <IonLabel color={"primary"} onClick={handleSignIn}>
                Sign in, or create an account
              </IonLabel>
            </StyledSignInHead>

            <StyledHeadCard>
              <IonCard onClick={() => history.push("/coming-soon")}>
                <IonIcon icon={library} color={"primary"} />
                <IonLabel color="light">Academy</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>
            </StyledHeadCard>
          </StyledHead>

          <StyledList>
            <StyledCardText>
              <IonTitle>About App</IonTitle>
            </StyledCardText>

            <IonRow>
              <IonCol size="12" sizeMd="6">
                <StyledCard>
                  <IonCard onClick={() => history.push("/premium")} >
                    <IonIcon icon={diamond} />
                    <IonLabel color="warning" >Premium</IonLabel>
                    <IonIcon icon={arrowForwardSharp} color={"secondary"} />
                  </IonCard>
                </StyledCard>
              </IonCol>
              <IonCol size="12" sizeMd="6">
                <StyledCard>
                  <IonCard>
                    <IonIcon color={"primary"} icon={settings} />
                    <IonLabel>TroubleShooting</IonLabel>
                    <IonIcon icon={arrowForwardSharp} color={"secondary"} />
                  </IonCard>
                </StyledCard>
              </IonCol>
            </IonRow>

            <StyledCard>
              <IonCard>
                <IonIcon color={"primary"} icon={help} />
                <IonLabel>Help & FAQ</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>
            </StyledCard>
            <StyledCard>
              <IonCard  onClick={() => history.push("/settings")}>
                <IonIcon color={"primary"} icon={settings} />
                <IonLabel>Settings</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>
            </StyledCard>
            <StyledCard>
              <IonCard  onClick={() => history.push("/coming-soon")}>
                <IonIcon color={"primary"} icon={bonfire} />
                <IonLabel>What's new</IonLabel>
                <IonIcon icon={arrowForwardSharp} color={"secondary"} />
              </IonCard>
            </StyledCard>
          </StyledList>
          <StyledFooter>
          <div className="social-icons">
            <IonIcon icon={logoFacebook} />
            <IonIcon icon={logoInstagram} />
            <IonIcon icon={logoTiktok} />
            <IonIcon icon={logoTwitter} />
            <IonIcon icon={logoYoutube} />
          </div>
          <p>
            Version 1.0.0 | <a href="mailto:support@example.com">Support</a>
          </p>
        </StyledFooter>
        </IonContent>
       
      </StyledPage>
    </IonApp>
  );
};

export default More;