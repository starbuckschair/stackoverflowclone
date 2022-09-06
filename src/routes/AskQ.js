import styled from "styled-components";
import { useEffect, useState } from "react";
import Contents from "../Contents.js";
import { useNavigate, useParams } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

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
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 27px;
  background-image: url("https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368");
  background-repeat: no-repeat;
  background-position: right center;

  //미디어쿼리 적용하기
`;

const ContentBox = styled.div`
  display: flex;
  width: 82vw;
  justify-content: space-between;
  padding: 0, 24, 24, 24px;
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
  box-shadow: 2px 3px 5px 1px rgba(186, 190, 194, 0.66);
`;
const TitleContent = styled.div`
  width: 96%;
  height: 80px;
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
  width: 100%;
  height: 25px;
  text-align: start;
  padding: 4.5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid hsl(210, 8%, 75%);
  &:focus {
    border: 1px solid hsl(206, 100%, 52%);
    border-radius: 3px;
    outline: 1px solid #9bc5f2;
  }
`;
const TextareaBox = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 4px;
  border-radius: 3px;
  resize: none;
  border: none;
  outline: 1px solid hsl(210,8%,75%);
  &:focus {
    border: 1px solid hsl(206,100%,52%);
    border-radius: 3px;
    outline: 1px solid #9bc5f2;
  }
`;
const RightBox = styled.div`
  width: 20em;
  height: 500px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 2px 3px 5px 1px rgba(186, 190, 194, 0.66); */
`;

const SubmitButton = styled.button`
  width: 155px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid transparent;
  /* background-color: hsl(206 100% 53% / 1); */
  background-color: #0A95ff;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  margin: 0 2px;
  padding: 0.8em;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover{
    background-color: hsl(209deg 100% 38%);
  }
`;
const Info = styled.div`
  box-sizing: inherit;
  background-color: #f8f9f9;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  box-shadow: 2px 3px 5px 1px rgba(186, 190, 194, 0.66);
  border: 1px solid hsl(210deg 8% 90%);
  &:first-child {
    background-color: #ffffff;
  }
  div {
    border-bottom: 1px solid hsl(210deg 8% 90%);
    background-color: #ffffff;
    color: hsl(210deg 8% 35%);
    /* width: 100%; */
    height: 30px;
    border-radius: 3px;
    padding: 12px 15px;
    /* margin-bottom: 5px; */
    display: flex;
    align-items: center;
  }
  p {
    padding: 12px 15px;
  }
`;

// const DropInfo = styled.div`
//   flex-direction: column;
//   div {
//     box-sizing: inherit;
//     background-color: #ffffff;
//     border-bottom: 1px solid hsl(210deg 8% 90%);
//     width: 100%;
//     height: 27px;
//     padding: 12px;
//     display: flex;
//     align-items: center;
//   }
// `;
const DropGray = styled.div`
  div {
    background-color: #f8f9f9;
    box-sizing: inherit;
    height: 25px;
    padding: 12px;
    display: flex;
    align-items: center;
    box-shadow: 2px 3px 5px 1px rgba(186, 190, 194, 0.66);
  }
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
    fetch(`${process.env.REACT_APP_API_URL}`, {
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
              <div>
                1 . Summarize the problem <IoChevronDownOutline />
              </div>
              <div>
                2 . Describe what you've tried <IoChevronDownOutline />
              </div>
              <div>
                3 . Shw some code
                <IoChevronDownOutline />
              </div>
            </Info>

            <DropGray>
              <div>Have a non-programing question?</div>
            </DropGray>
            <DropGray>
              <div>More helpful links</div>
            </DropGray>
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
