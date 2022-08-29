import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px;
`;

const InsertBox = styled.div`
  border: 1px solid rebeccapurple;
  width: 450px;
  height: 500px;
`;
const RightBox = styled.div`
  border: 1px solid red;
  width: 150px;
  height: 350px;
`;
const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: aliceblue;
`;

function AskQ() {
  return (
    <>
      <Container>
        <InsertBox>
          <h4>title</h4>
          <p>
            Be specific and imagine you're asking a question to anoher person
          </p>
          <input></input>
          <h4>body</h4>
          <p>
            Include all the information someone would need to answer your
            question
          </p>
          <textarea></textarea>
          <p>Tags</p>
          <input type="text"></input>
        </InsertBox>

        <RightBox>
          <>
            <div>
              <p>Step 1: Draft your question</p>
            </div>
            <div>
              <p>Have a non-programing question?</p>
            </div>
            <div>
              <p>More helpful links</p>
            </div>
          </>
        </RightBox>
      </Container>
      <SubmitButton>Review your question</SubmitButton>
    </>
  );
}

export default AskQ;
