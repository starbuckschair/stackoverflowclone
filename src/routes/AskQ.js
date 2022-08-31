import styled from "styled-components";
import { useEffect, useState } from "react";
import Contents from "../Contents.js";

const BackStyle = styled.div`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  margin-top: 70px;
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

  > label {
    font-weight: bold;
  }
`;
const InputBoxes = styled.input`
  flex: 1;
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
  const [titlevalue, setTitleValue] = useState("");
  const [bodyvalue, setBodyValue] = useState("");
  const [tagsvalue, setTagsValue] = useState("");

  return (
    <>
      <BackStyle>
        <Container>
          <Writebox>
            <InsertBox>
              <label>title</label>
              <p>
                Be specific and imagine you're asking a question to anoher
                person
              </p>
              <InputBoxes
                type="text"
                id="title"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                onChange={(e) => {
                  setTitleValue(e.target.value);
                  console.log(titlevalue);
                }}
              ></InputBoxes>
              <label>body</label>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                id="questions"
                onChange={(e) => {
                  setBodyValue(e.target.value);
                  console.log(bodyvalue);
                }}
              ></textarea>
              <label>Tags</label>
              <p>Add up to 5 tags to describe what your question is about</p>
              <InputBoxes
                type="text"
                id="tagtag"
                placeholder="e.g. (angular sql-server string)"
                onChange={(e) => {
                  setTagsValue(e.target.value);
                  console.log(tagsvalue);
                }}
              ></InputBoxes>
            </InsertBox>
            <SubmitButton
              onClick={() => {
                
              }}
            >
              Review your question
            </SubmitButton>
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

function Modal() {
  return <></>;
}
export default AskQ;
