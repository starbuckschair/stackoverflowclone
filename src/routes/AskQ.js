import styled from "styled-components";

const BackStyle = styled.div`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Writebox = styled.div`
  flex-direction: column;
`;

const InsertBox = styled.div`
  border: 1px solid rebeccapurple;
  background-color: white;
  width: 50em;
  height: 600px;
  flex-direction: column;
  margin-bottom: 20px;
`;
const RightBox = styled.div`
  border: 1px solid red;
  width: 20em;
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
      <BackStyle>
        <Container>
          <Writebox>
            <InsertBox>
              <h4>title</h4>
              <p>
                Be specific and imagine you're asking a question to anoher
                person
              </p>
              <input></input>
              <h4>body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea></textarea>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input type="text"></input>
            </InsertBox>
            <SubmitButton>Review your question</SubmitButton>
          </Writebox>

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
      </BackStyle>
    </>
  );
}

export default AskQ;
