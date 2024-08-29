import React, { useState, useRef } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonFabButton, IonIcon, IonToast } from '@ionic/react';
import { camera, sync, cloudUpload } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import styled from 'styled-components';

const StyledPage = styled(IonPage)`
  --ion-background-color: #090b22;
  --ion-text-color: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 35px 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CameraButton = styled(IonFabButton)`
  --ion-color-primary: #ffffff;
  --ion-color-primary-contrast: #4a4a4a;
  width: 70px;
  height: 70px;
`;

const SideButton = styled(IonFabButton)`
  --ion-color-primary: rgba(255, 255, 255, 0.3);
  --ion-color-primary-contrast: #ffffff;
`;

const CameraPage: React.FC = () => {
  const [photoPath, setPhotoPath] = useState<string | undefined>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const lastCaptureTime = useRef(0);

  const captureImage = async (source: CameraSource) => {
    const now = Date.now();
    if (now - lastCaptureTime.current < 1000) {
      setToastMessage('Please wait a moment before capturing another image.');
      setShowToast(true);
      return;
    }

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: source
      });
      setPhotoPath(image.webPath);
      lastCaptureTime.current = now;
    } catch (error) {
      console.error('Error capturing image:', error);
      setToastMessage('Failed to capture image. Please try again.');
      setShowToast(true);
    }
  };

  const takePicture = () => captureImage(CameraSource.Camera);
  const takeQuickPicture = () => captureImage(CameraSource.Prompt);

  const toggleCamera = () => {
    // Placeholder for camera toggle functionality
    setToastMessage('Camera toggled');
    setShowToast(true);
  };

  return (
    <StyledPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContentContainer>
          <ImageContainer>
            {photoPath ? (
              <StyledImage src={photoPath} alt="Captured" />
            ) : (
              <div style={{ color: '#ffffff', fontSize: '18px' }}>No image captured</div>
            )}
          </ImageContainer>
          <ControlsContainer>
            <SideButton onClick={takePicture}>
              <IonIcon icon={cloudUpload} />
            </SideButton>
            <CameraButton onClick={takeQuickPicture}>
              <IonIcon icon={camera} />
            </CameraButton>
            <SideButton onClick={toggleCamera}>
              <IonIcon icon={sync} />
            </SideButton>
          </ControlsContainer>
        </ContentContainer>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={2000}
      />
    </StyledPage>
  );
};

export default CameraPage;