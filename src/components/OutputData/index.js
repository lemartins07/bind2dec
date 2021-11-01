import React from "react";
import styled from 'styled-components';

import { Input } from './styles';

export const OutputData = (props) => {

  return (
    <div className="output-group">
      <div className="form-group">
        <label>Decimal Output</label>
        <Input                 
          name="decimal"
          placeholder="Decimal" 
          readOnly 
          value={props.formValues.decimal || ''}
          isvalid="true"
        />              
      </div>
    </div>
  );
}