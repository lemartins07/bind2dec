import styled from "styled-components"

export const Container = styled.div`
  flex-direction: column;    
  border-radius: 5px;
  padding: 20px 10px;
  
  label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 2rem;
    padding: 5px;
  }

`;

interface InputProps  {
  isValid: boolean
}

export const Input = styled.input<InputProps>`
  width: 60%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 0;
  background: var(--rich-black);
  outline: 0;  
  border: ${props => props.isValid ? 0 : "1px solid red"};
  margin-right: 20px;
`;

export const Content = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 35%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  background: var(--goldweb-golde);
  color: var(--rich-black);
  font-weight: bold;
  border: 0;
`