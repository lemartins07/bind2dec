import React, { ChangeEvent } from "react";

import { Container, Content, Input, Button } from './styles';

interface InputDataProps {
  isValid: boolean,
  maxlength: boolean,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  binary: string | undefined,
}
  

export const InputData: React.FC<InputDataProps> = (props) => {
  //console.log('*** Input Props',props);
  return (
    <Container className="input-group">
      <label>Binary Input</label>
      <Content className="form-group">
        <Input
          name="binary" 
          placeholder="Binary"           
          isValid={props.isValid}
          value={props.binary}
          onChange={props.handleInputChange}
          autoComplete="off"
          maxLength={8}
        />              
        <Button 
          type="submit"                
          disabled={!props.isValid}
        >
          Convert
        </Button>
      </Content>
      {!props.isValid && <span style={{color: 'red', display: 'block'}}>Número inválido, digite 0 ou 1</span>}
      {props.maxlength && <span style={{color: 'red'}}>Número máximo permitido, 8 dígitos</span>}
    </Container>
  );
}

