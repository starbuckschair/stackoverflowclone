import styled from "styled-components";
import { useEffect, useState } from "react";
import Contents from "../Contents.js";
import { useNavigate, useParams } from "react-router-dom";

const BackStyle = styled.div`
  padding-top: 70px;
  background-color: #f1f2f3;
  width: 100%;
  height: auto;
  /* margin-left:3%; */
`;
const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  /* box-sizing: border-box; */
  padding: 0, 24, 24, 24;
`;

const HeadLine = styled.div`
  width: 70em;
  height: 82px;
  padding-top: 24px;
  padding-bottom: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: large;
`;

const ContentBox = styled.div`
  display: flex;
  width: 85vw;
  justify-content: space-between;
  padding: 24px;
  border: 1px solid red;
`;
const LeftBox = styled.div`
  flex-direction: column;
`;

const InsertBox = styled.div`
  /* border: 1px solid rebeccapurple; */
  border-radius: 3px;
  box-sizing: inherit;
  background-color: #ffffff;
  width: 53em;
  height: 600px;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 11px -4px #d8d9da;

  > label {
    font-weight: bold;
  }
`;
const InputBoxes = styled.input`
  width: 96%;
  height: 25px;
  text-align: start;
  padding: 4.5px;
`;
const TextareaBox = styled.textarea`
  width: 96%;
  height: 200px;
  padding: 4px;
`;
const RightBox = styled.div`
  background-color: #ffffff;
  width: 20em;
  /* border: 1px solid red; */
  height: 350px;
  box-shadow: 3px 3px 11px -4px #d8d9da;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: aliceblue;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AskQ() {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [tagsValue, setTagsValue] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();

  let question = {
    questionId: 15,
    userId: 1,
    title: titleValue,
    body: bodyValue,
    tagList: [],
    cratedAt: "2022-08-27T14:20:00.1151922",
    modifiedAt: "2022-08027T14:20:00.1151922",
    views: 0,
    votes: 0,
    answerList: [],
  };

  const WriteSub = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/question", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(question),
    }).then((res) => console.log(res.json()));
    // setValue("");
    subWrite();
  };
  const subWrite = () => {
    navigate("/");
  };
  return (
    <BackStyle>
      <Container>
        <HeadLine>Ask a public question</HeadLine>
        <ContentBox>
          <LeftBox>
            <InsertBox>
              <label>
                Title
                <div>
                  <p>
                    Be specific and imagine you're asking a question to anoher
                    person
                  </p>
                </div>
              </label>
              <InputBoxes
                type="text"
                id="title"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                onChange={(e) => {
                  setTitleValue(e.target.value);
                  console.log(titleValue);
                }}
              ></InputBoxes>
              <label>body</label>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <TextareaBox
                onChange={(e) => {
                  setBodyValue(e.target.value);
                  console.log(bodyValue);
                }}
              ></TextareaBox>
              <label>Tags</label>
              <p>Add up to 5 tags to describe what your question is about</p>
              <InputBoxes
                type="text"
                placeholder="e.g. (angular sql-server string)"
                onChange={(e) => {
                  setTagsValue(e.target.value);
                  console.log(tagsValue);
                }}
              ></InputBoxes>
            </InsertBox>
            <SubmitButton onClick={WriteSub}>Review your question</SubmitButton>
          </LeftBox>

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
        </ContentBox>
      </Container>
    </BackStyle>
  );
}

function Modal() {
  return <></>;
}
export default AskQ;
