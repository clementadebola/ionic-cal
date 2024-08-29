import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonTitle,
  IonButton,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import {
  removeOutline,
  arrowBack,
  addOutline,
  closeOutline,
  backspaceOutline,
  refreshOutline
} from "ionicons/icons";
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
  --padding-top: 20px;
  --padding-bottom: 20px;
`;

const CalculatorGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap" 10px;
padding: 20px;
`;

const ResultDisplay = styled.div`
  grid-column: 1 / -1;
  background-color: #f4f4f4;
  color: #000;
  padding: 20px;
  font-size: 2em;
  text-align: right;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const OperatorButton = styled(StyledButton)`
---background: %f0ad4e;
--color: #ffffff;
`;

const EqualButton = styled(StyledButton)`
--background: #5cb85c;
--color: #ffffff;
`;

const ClearButton = styled(StyledButton)`
--background: #d9534f;
--color: #ffffff;

`;


const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>('0');
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setResult(digit);
      setWaitingForOperand(false);
    } else {
      setResult(result === "0" ? digit : result + digit);
    }
  };

  const inputDecimal = ()=>{
    if (waitingForOperand){
      setResult('0.');
      setWaitingForOperand(false);
    } else if(result.indexOf('.') === -1){
      setResult(result + '.');
    }
  };

  const clearLastChar = () => {
    if (result.length === 1){
      setResult('0');
      setWaitingForOperand(true);
    }else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  const clearAll = ()=>{
    setResult('0');
    setWaitingForOperand(true);
  };


  const PerformOperation = (nextOperator: string)=> {
    const inputValue = parseFloat(result);

    if(result.slice(-1) === '.'){
      setResult(result.slice(0, -1));
    }

    try{
      const newResult = eval(result + nextOperator);
      setResult(Number.isFinite(newResult) ? newResult.toString() : 'Error');
    } catch (error) {
      setResult('Error');
    }
    setWaitingForOperand(true);
  };

  return (
    <StyledPage>
      <Header>
        <IonToolbar>
          <IonButton slot="start" routerLink="/" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <StyledTitle>Calculator</StyledTitle>
        </IonToolbar>
      </Header>

      <IonContent fullscreen>
        <CalculatorGrid>
          <ResultDisplay>{result}</ResultDisplay>
          <StyledButton expand="block" onClick={() => inputDigit("7")}>
            7
          </StyledButton>
          <StyledButton expand="block" onClick={() => inputDigit("8")}>
            8
          </StyledButton>
          <StyledButton expand="block" onClick={() => inputDigit("9")}>
            9
          </StyledButton>
          <OperatorButton expand="block" onClick={() => PerformOperation('+')}>
          <IonIcon icon={addOutline} />
          </OperatorButton>

          <StyledButton expand="block" onClick={() => inputDigit('4')}>4
          </StyledButton>
          <StyledButton expand="block" onClick={() => inputDigit('5')}>5
          </StyledButton>
          <StyledButton expand="block" onClick={() => inputDigit('6')}>6
          </StyledButton>
          <OperatorButton expand="block" onClick={() => PerformOperation('-')}>
            <IonIcon icon={removeOutline} />
          </OperatorButton>

          <StyledButton expand="block" onClick={() => inputDigit('1')}>4
          </StyledButton>
          <StyledButton expand="block" onClick={() => inputDigit('2')}>5
          </StyledButton>
          <StyledButton expand="block" onClick={() => inputDigit('3')}>6
          </StyledButton>
          <OperatorButton expand="block" onClick={() => PerformOperation('*')}>
            <IonIcon icon={closeOutline} />
          </OperatorButton>

          <StyledButton expand="block" onClick={() => inputDigit('0')}>0
          </StyledButton>
          <StyledButton expand="block" onClick={inputDecimal}>.
          </StyledButton>
          <OperatorButton expand="block" onClick={() => PerformOperation('/')}>
            /
          </OperatorButton>
          <EqualButton expand="block" onClick={() => PerformOperation('=')}> =
          </EqualButton>

          <ClearButton expand="block" onClick={clearLastChar}>
            <IonIcon icon={backspaceOutline} />
          </ClearButton>
          <ClearButton expand="block" onClick={clearAll}>
            <IonIcon icon={refreshOutline} />
          </ClearButton>

        </CalculatorGrid>
      </IonContent>
    </StyledPage>
  );
};

export default Calculator;
