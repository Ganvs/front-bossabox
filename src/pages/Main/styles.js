import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }

  .search-add-session {
    display: flex;
    justify-content: space-between;
  }

  button {
    background: #365df0;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 14px 26px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
`;
