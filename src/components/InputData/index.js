import React from "react";

import { Container, Content, Input, Button } from './styles';

export const InputData = (props) => {
  return (
    <div className="input-group">
      <label>Binary Input</label>
      <div className="form-group">
        <Input
          name="binary" 
          placeholder="Binary" 
          maxLength="8"
          isvalid={props.isValid}
          value={props.formValues.binary || ''}
          onChange={props.handleInputChange}
          autoComplete="off"
        />              
        <Button 
          type="submit"                
          disabled={!props.isValid}
        >
          Convert
        </Button>
      </div>
      {!props.isValid && <span style={{color: 'red', display: 'block'}}>Número inválido, digite 0 ou 1</span>}
      {props.maxLength && <span style={{color: 'red'}}>Número máximo permitido, 8 dígitos</span>}
    </div>
  );
}

