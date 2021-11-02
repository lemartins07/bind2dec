import React, { ChangeEvent, FormEvent, useState } from "react";

import { Container, Content } from './styles';

import { InputData } from '../../components/InputData'
import { OutputData } from '../../components/OutputData'


export const Home = (): JSX.Element => { 
  const [ binary, setBinary ] = useState<string>('');
  const [ decimal, setDecimal ] = useState<number | string>();  
  
  const [isValid, setIsValid] = useState(true);
  const [maxLength, setMaxLength] = useState(false);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value  = e.target.value;
    
    setBinary(value);     
    
    if(value.length >= 8) {
      setMaxLength(true);
    } else {
      setMaxLength(false);
    }

    const regex = /[0-9]/;

    for(let i = 0; i < value.length; i++) {
      if (parseInt(value[i]) > 1 || parseInt(value[i]) < 0 || !regex.test(value[i])){                
        setIsValid(false);        
        return;
      }else {
        setIsValid(true);
      }
    }
  }

  const handleSubmit = ((e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
        
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
              
    let parsedBinary = data.binary = String(data.binary);
    
    let decimal = 0;

    for (let c = 0; c < parsedBinary.length; c++) {
      //calcula para pegar do último ao primeiro      
      decimal += Math.pow(2, c) *  parseInt(parsedBinary[ parsedBinary.length - c - 1]);       
    }    
    
    setMaxLength(false);
    setBinary('');
    setDecimal(decimal);
  })

  return (
    <Container>
      <Content>
        <h1>Binary to Decimal Converter</h1>
        <form onSubmit={handleSubmit} >          
          <InputData
            isValid={isValid}
            maxlength={maxLength}
            handleInputChange={handleInputChange}            
            binary={binary}
          />          
          <OutputData decimal={decimal} />          
        </form>
      </Content>
    </Container>
  );   
}