import styled from "styled-components";
import { useEffect, useState } from "react";
import Contents from "../Contents.js";
import { useNavigate, useParams } from "react-router-dom";

const BackStyle = styled.div`
  background-color: #f1f2f3;
`;

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: space-around;
`;
const WriteBox = styled.div`
  flex-direction: column;
`;

const InsertBox = styled.div`
  border: 1px solid rebeccapurple;
  background-color: #ffffff;
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
    <>
      <BackStyle>
        <Container>
          <WriteBox>
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
                  console.log(titleValue);
                }}
              ></InputBoxes>
              <label>body</label>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                onChange={(e) => {
                  setBodyValue(e.target.value);
                  console.log(bodyValue);
                }}
              ></textarea>
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
          </WriteBox>

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
