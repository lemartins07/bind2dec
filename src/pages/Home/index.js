import React, { useState } from "react";


import { Container, Content, Input, Button } from './styles';

import { InputData } from '../../components/InputData'

export const Home = () => {
  
  const [ formValues, setFormValues ] = useState({});
  
  const [isValid, setIsValid] = useState(true);
  const [maxLength, setMaxLength] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;    
    setFormValues({...formValues, [name]: value});
    
    if(value.length >= 8) {
      setMaxLength(true);
    } else {
      setMaxLength(false);
    }

    for(let i = 0; i < value.length; i++) {      
      if (value[i] > 1 || value[i] < 0){        
        setIsValid(false);        
        return;
      }else {
        setIsValid(true);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);   
    
    data.decimal = 0;
    
    for (let c = 0; c <  data.binary.length; c++) {
      //calcula para pegar do último ao primeiro      
      data.decimal += parseInt(Math.pow(2, c) *  data.binary[ data.binary.length - c - 1]);       
    }
    data.binary = '';
    data.decimal = String(data.decimal);
    setMaxLength(false);
    setFormValues(data);
  }

  return (
    <Container>
      <Content>
        <h1>Binary to Decimal Converter</h1>
        <form onSubmit={handleSubmit} >
          
          <InputData 
            handleInputChange
          />
          
          <div className="output-group">
            <div className="form-group">
              <label>Decimal Output</label>
              <Input                 
                name="decimal"
                placeholder="Decimal" 
                readOnly 
                value={formValues.decimal || ''}
                isvalid="true"
              />              
            </div>
          </div>
        </form>
      </Content>
    </Container>
  );   
}