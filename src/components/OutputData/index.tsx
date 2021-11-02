import React from "react";

import { Container, Input } from './styles';

interface OutputDataProps {  
  decimal?: number | string
}

export const OutputData: React.FC<OutputDataProps> = ({ decimal } ) => {

  return (
    <Container className="output-group">
      <div className="form-group">
        <label>Decimal Output</label>
        <Input                 
          name="decimal"
          placeholder="Decimal" 
          readOnly 
          value={decimal}          
        />              
      </div>
    </Container>
  );
}