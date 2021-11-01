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
  .output-group .form-group label {
    display: block;
    margin-bottom: 10px;
    font-size: 2rem;
    padding: 5px;    
  }  
`;