import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonIcon,
  IonTitle,
  IonButton,
  IonHeader,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { settingsOutline, arrowBack, add, trash } from "ionicons/icons";
import styled from "styled-components";

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

const StyledCard = styled(IonCard)`
  --background: #1e2235;
  margin: 10px;
`;

const StyledInput = styled(IonInput)`
  --color: #ffffff;
  --placeholder-color: #8e8e93;
`;

const StyledFab = styled(IonFab)`
  margin-bottom: 20px;
`;

interface Note {
  id: number;
  content: string;
  result?: string;
}

const CalculatorPro: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    const newNote: Note = {
      id: Date.now(),
      content: '',
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id: number, content: string) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, content } : note
    );
    setNotes(updatedNotes);
  };

  const solveNote = (id: number) => {
    const noteToSolve = notes.find(note => note.id === id);
    if (noteToSolve) {
      try {
        // This is a simple eval for demonstration. In a real app, use a proper math parsing library.
        const result = eval(noteToSolve.content);
        const updatedNotes = notes.map(note =>
          note.id === id ? { ...note, result: result.toString() } : note
        );
        setNotes(updatedNotes);
      } catch (error) {
        console.error('Error solving equation:', error);
      }
    }
  };

  const deleteNote = (id: number) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonButton slot="start" routerLink="/" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <StyledTitle>Calculator Pro</StyledTitle>
          <StyledButton slot="end" fill="clear">
            <IonIcon icon={settingsOutline} />
          </StyledButton>
        </IonToolbar>
      </Header>

      <IonContent fullscreen>
        <IonList>
          {notes.map(note => (
            <StyledCard key={note.id}>
              <IonCardContent>
                <StyledInput
                  value={note.content}
                  placeholder="Enter your equation"
                  onIonChange={e => updateNote(note.id, e.detail.value!)}
                />
                {note.result && <p>Result: {note.result}</p>}
                <IonButton onClick={() => solveNote(note.id)}>Solve</IonButton>
                <IonButton onClick={() => deleteNote(note.id)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonCardContent>
            </StyledCard>
          ))}
        </IonList>
        <StyledFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={addNote}>
            <IonIcon icon={add} />
          </IonFabButton>
        </StyledFab>
      </IonContent>
    </StyledPage>
  );
};

export default CalculatorPro;