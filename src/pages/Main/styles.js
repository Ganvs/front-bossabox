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
    text-align: center;
    letter-spacing: 0.36px;

    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin-top: 30px;

  .search-box {
    padding: 5px;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
  }

  .search-box::placeholder {
    text-align: left;
    font: Regular 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: #b1adb9;
    opacity: 1;
  }
`;
