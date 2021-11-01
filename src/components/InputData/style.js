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

export const Input = styled.input`
   border: ${props => {
        console.log('*** styles: ', props)
        return props.isvalid ? 0 :"1px solid red"
        }};
`;