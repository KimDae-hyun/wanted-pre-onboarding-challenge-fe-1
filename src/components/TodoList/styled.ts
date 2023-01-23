import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: raw;
  padding: 2rem;

  .error {
    color: #f00001;
    margin: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const UpdateForm = styled.div`
  display: flex;
  justify-content: right;
`;

export const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  font-weight: 500;
  box-sizing: border-box;
  border-radius: 0.3rem;
  border: 1px solid #d6d6d6;
  div {
    font-size: 1rem;
  }
  padding: 5px;
  margin: 0.5rem 0.5rem 0 0.5rem;
`;

export const TodosForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const TitleForm = styled.div<{ update?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: right;
  input {
    ::placeholder {
      color: #b5b5b5;
    }
    width: ${(props) => (props.update ? '305px' : '320px')};
    height: 48px;
    box-sizing: border-box;
    padding: 5px 0 5px 15px;
    border-radius: 0.3rem;
    border: 1px solid #d6d6d6;
    font-weight: 400;
  }
  textarea {
    ::placeholder {
      color: #b5b5b5;
    }
    width: ${(props) => (props.update ? '305px' : '320px')};
    height: ${(props) => (props.update ? '160px' : '320px')};
    box-sizing: border-box;
    margin-top: 0.5rem;
    padding: 15px;
    border-radius: 0.3rem;
    border: 1px solid #d6d6d6;
    font-weight: 400;
    overflow: scroll;
  }
  div {
    text-align: right;
    font-size: 1.3rem;
    padding: 0.5rem;
    color: #5acf28;
  }
  margin: 0.5rem;
`;

export const AddButtons = styled.div`
  display: flex;
  justify-content: right;
  input {
    cursor: pointer;
    border-radius: 0.3rem;
    border: white;
    background: #5acf28;
    width: 40px;
    height: 30px;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin-right: 0.5rem;
  }
`;

export const TodoTitle = styled.span`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  div {
    font-size: 1.2rem;
  }
`;
