import React, { useState, useRef } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonButton,
  IonModal,
  IonButtons,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';
import { camera, image, close, trash, cloudUpload } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import styled from 'styled-components';

const StyledSegment = styled(IonSegment)`
  --background: #f4f5f8;
`;

const PhotoGrid = styled(IonGrid)`
  padding: 0;
`;

const PhotoImg = styled(IonImg)`
  border-radius: 8px;
  margin: 5px;
`;

const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CameraPreview = styled.video`
  width: 100%;
  max-height: 70vh;
  object-fit: cover;
`;

const CameraButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const CameraPage: React.FC = () => {
  const { photos, takePhoto, deletePhoto, addPhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [showModal, setShowModal] = useState(false);
  const [segmentValue, setSegmentValue] = useState('gallery');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setShowModal(true);
      setSegmentValue('camera');
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
    setShowModal(false);
  };

  const capturePhoto = async () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg');
      await addPhoto(dataUrl);
      closeCamera();
    }
  };

  const uploadFile = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        quality: 100
      });
      await addPhoto(photo.webPath!);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
        <StyledSegment value={segmentValue} onIonChange={e => setSegmentValue(e.detail.value!)}>
          <IonSegmentButton value="gallery">
            <IonLabel>Gallery</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="camera">
            <IonLabel>Camera</IonLabel>
          </IonSegmentButton>
        </StyledSegment>
      </IonHeader>
      <IonContent>
        {segmentValue === 'gallery' && (
          <PhotoGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <PhotoImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
                </IonCol>
              ))}
            </IonRow>
          </PhotoGrid>
        )}
        {segmentValue === 'camera' && !showModal && (
          <CameraContainer>
            <IonButton onClick={openCamera}>Open Camera</IonButton>
          </CameraContainer>
        )}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={openCamera}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={uploadFile}>
            <IonIcon icon={cloudUpload}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
        <IonModal isOpen={showModal} onDidDismiss={closeCamera}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Take a Photo</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={closeCamera}>
                  <IonIcon icon={close} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <CameraContainer>
              <CameraPreview ref={videoRef} autoPlay playsInline />
              <CameraButtonContainer>
                <IonButton onClick={capturePhoto}>
                  <IonIcon icon={camera} slot="start" />
                  Capture
                </IonButton>
              </CameraButtonContainer>
            </CameraContainer>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;