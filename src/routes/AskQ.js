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
  width: 85vw;
  height: 82px;
  padding-top: 24px;
  padding-bottom: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 27px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 82vw;
  justify-content: space-between;
  padding: 0, 24, 24, 24px;
  border: 1px solid red;
  margin-bottom: 20px;
`;
const LeftBox = styled.div`
  flex-direction: column;
`;

const InsertBox = styled.div`
  /* border: 1px solid rebeccapurple; */
  border-radius: 3px;
  box-sizing: inherit;
  background-color: #ffffff;
  width: 50em;
  height: 500px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 11px -4px #d8d9da;
`;
const TitleContent = styled.div`
  width: 96%;
  height: 90px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  > label {
    font-weight: bold;
    div {
      font-weight: 400;
    }
  }
`;

const BodyContent = styled.div`
  width: 96%;
  height: 260px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  > label {
    font-weight: bold;
    div {
      font-weight: 400;
    }
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
  width: 155px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background-color: hsl(206 100% 53% / 1);
  text-align: center;
  color: #ffffff;
  padding: 0.8em;
`;
const Info = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  border: 1px solid hsl(210deg 8% 90%);
  div {
    border-bottom: 1px solid hsl(210deg 8% 90%);
    background-color: #f8f9f9;
    color: hsl(210deg 8% 35%);
    width: 100%;
    height: 30px;
    padding: 12px 15px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  p {
    padding: 12px 15px;
  }
`;

const DropInfo = styled.div`
  flex-direction: column;
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
    questionId: 1,
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
              <TitleContent>
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
              </TitleContent>
              <BodyContent>
                <label>
                  body
                  <div>
                    <p>
                      Include all the information someone would need to answer
                      your question
                    </p>
                  </div>
                </label>
                <TextareaBox
                  onChange={(e) => {
                    setBodyValue(e.target.value);
                    console.log(bodyValue);
                  }}
                ></TextareaBox>
              </BodyContent>
              <TitleContent>
                <label>
                  Tags
                  <div>
                    <p>
                      Add up to 5 tags to describe what your question is about
                    </p>
                  </div>
                </label>
                <InputBoxes
                  type="text"
                  placeholder="e.g. (angular sql-server string)"
                  onChange={(e) => {
                    setTagsValue(e.target.value);
                    console.log(tagsValue);
                  }}
                ></InputBoxes>
              </TitleContent>
            </InsertBox>
            <SubmitButton onClick={WriteSub}>Review your question</SubmitButton>
          </LeftBox>

          <RightBox>
            <Info>
              <div>Step 1: Draft your question</div>
              <p>
                The community is here to help you with specific coding,
                algorithm, or language problems.
              </p>
              <p>Avoid asking opinion-based questions.</p>
            </Info>
            <DropInfo>
              <ul>
                1 . Summarize the problem
                <li>Include details about your goal</li>
                <li>Describe expected and actual results</li>
                <li>Include any error messages</li>
              </ul>
            </DropInfo>

            <div>
              <ol>
                <li>
                  <p>Have a non-programing question?</p>
                </li>
              </ol>
            </div>

            <div>
              <p>More helpful links</p>
            </div>
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
