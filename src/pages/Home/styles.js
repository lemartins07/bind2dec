import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;  
  
  h1 {
    display:block;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    color: var(--oxford-blue);
  }

  form {
    width: 100%;    
    padding: 20px;  
    border: 1px solid var(--rich-black);
    background: var(--oxford-blue);
  }

  form .input-group {
    
      
  }

  .input-group label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 2rem;
    padding: 5px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group input {
   
  }

  .form-group input:first-child {
    
   
  }

  .form-group button {
    width: 35%;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
    background: var(--goldweb-golde);
    color: var(--rich-black);
    font-weight: bold;
    border: 0;
  }

  .output-group .form-group label {
    display: block;
    margin-bottom: 10px;
    font-size: 2rem;
    padding: 5px;    
  }  
`
export const Input = styled.input`
  width: 60%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 0;
  background: var(--rich-black);
  outline: 0;  
  border: ${props =>  props.isvalid ? 0 :"1px solid red"};
`

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