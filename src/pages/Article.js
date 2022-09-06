import Aside from "./Aside";
import FilterMessage from "../FilterMessage";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import RightBar from "../RightBar";

function Article() {
  let [questions, setQuestions] = useState([]);
  let [modal, setModal] = useState(false);
  let changeModal = () => {
    setModal();
  };
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}`)
    .then((res) => {
      console.log(res.data);
      let copy = [...questions, ...res.data];
      console.log(copy);
      setQuestions(copy);
    });
  }, []);

let MainPage = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
  padding-top: 70px;
  display: flex;
  /* background-color: pink; */
  justify-content: center;
  box-sizing: border-box;
`
let Sidebar = styled.div`
  width: 147px;
  height: auto;
  /* background-color: yellow; */
  display:flex;
  justify-content: right;

`

let ArticleStyle = styled.div`
  width: 80%;
  height: auto;
  padding: 0.5%;
  padding-top: 0px;
  /* background-color: blue; */
  float: right;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
`
let MainBar = styled.div`
  width: 70%;
  height: auto;
  margin: 0.5%;
  padding: 5px;
  border-left: 1px solid rgb(216 217 220);
  /* background-color: pink; */
  
  @media screen and (max-width: 768px) {
    width: 98%;
}
`
let HeadLine = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  /* border: 1px solid rgb(216 217 220); */
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */

`
let AllQuestion = styled.div`
  width: 40%;
  height: auto;
  font-size: 27px;
  font-weight: 500;
  color: black;
  padding: 0.5%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin: 0.5%;
`
let QuestionButton = styled.button`
    width: 110px;
    height: 40px;
    background-color: rgb(67 147 247);
    color: white;
    font-size: 13px;
    font-weight: bolder;
    margin: 2%;
    padding: 10px;
    text-align: center;
    border: none;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    &:hover {
      background-color: #0074cc;
      cursor: pointer;
    }
`
let HeadLineTwo = styled.div`
  width: 95%;
  height: 50px;
  background-color: white;
  padding-left: 5%;
  padding-right: 0px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
let QuestionTotal = styled.div`
    width: 30%;
    height: 15px;
    font-size: 18px;
    margin-top: 0.5%;
    text-align: left;
`
let FilterBar = styled.div`
  width: 70%;
  height: 30px;
  margin-right: 20px;
  background-color: white;
  display: flex;
  justify-content: right;
  align-items: center;
`
let FilterBarButton = styled.button`
  width: auto;
  height: 35px;
  /* margin: 0.5%; */
  background-color: white;
  /* padding: 10px; */
  border: 1px solid rgb(216 217 220);
  font-size: 13px;
  align-items: center;
  padding-left:10px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
  display: none;
}
`
let FilterButton = styled(FilterBarButton)`
  width: 70px;
  margin-left: 20px;
  border-radius: 5px;
  color: rgb(72 114 153);
  font-weight: 600;
  background-color: rgb(216 225 232);
  &:hover{
      background-color : rgb(150 175 198);
      color: rgb(37 59 80);
      cursor: pointer;
    }
`
let SelectButton = styled.select`
  width: 60px;
  height: 35px;
  background-color: white;
  border: 1px solid rgb(216 217 220);
  font-size: 12px;
  /* padding-right:5px; */
  /* padding-right: 5px; */
  text-align: center;
`
let FilteredQuestion = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  /* margin-left: 2px; */
  border-top: 1px solid rgb(216 217 220);
  background-color: white;
  color: black;
  font-size: 11px;
  display: flex;
  justify-content: center;
`
let LeftBox = styled.div`
  width: 10%;
  height: auto;
  /* background-color: black; */
  font-size: 14px;
  margin-right:2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`
let LeftBoxSons = styled.div`
  width: 80%;
  height: 16px;
  background-color: white;
  color: black;
  text-align: right;
  margin-bottom: 10px;
`
let VotesDiv = styled(LeftBoxSons)`
    font-weight: bold;
    margin-top: 0;
  `;
  let AnswersDiv = styled(LeftBoxSons)`
    color: rgb(83 140 93);
    border: 1px solid rgb(83 140 93);
    border-radius: 5px;
    text-align: center;
    height: 20px;
    font-weight: 500;
  `;
  let ViewsDiv = styled(LeftBoxSons)`
    color: rgb(101 108 115);
  `;
  let LikeDiv = styled(LeftBoxSons)`
    width: 40px;
    height: 20px;
    color: white;
    font-size: 14px;
    background-color: rgb(49 114 198);
    border-radius: 5px;
    text-align: center;
    margin: 0%;
    padding-top: 3px;
  `;
  let RightBox = styled.div`
    width: 85%;
    height: auto;
    background-color: white;
    font-size: 13px;
    color: black;
    margin-left: 2px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;
  let RightBoxSons = styled.div`
    width: 98%;
    height: auto;
    background-color: white;
    color: rgb(48 112 195);
    font-size: 17px;
    margin-bottom: 5px;
    font-weight: 500;
    /* border: 1px solid black; */
    overflow: hidden;
    word-break: break-all;
  `;
  let RightBoxSons2 = styled.div`
    width: 98%;
    height: 30px;
    background-color: white;
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2 (integer);
    overflow: hidden;
  `;
  let RightBoxSons3 = styled.div`
    width: 98%;
    height: auto;
    margin-bottom: 5px;
    background-color: white;
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  let TagBox = styled.div`
    width: auto;
    height: 14px;
    background-color: rgb(227 236 243);
    font-size: 13px;
    border-radius: 5px;
    padding: 6px 4.8px;
    color: rgb(72 114 153);
    margin-top: 0.5%;
    display: flex;
    text-align: center;
    align-items: center;
    word-break: break-all;
  `;
  let CurrentAskedTime = styled.div`
    width: 30%;
    height: 20px;
    font-size: 12px;
    color: rgb(82 87 93);
    margin: 0.5%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    word-break: break-all;
  `;
 
  return (
    <MainPage>
      <Sidebar>
      <Aside />
      </Sidebar>
      <ArticleStyle>
        <MainBar>
          <HeadLine>
            <AllQuestion>All Question</AllQuestion>
            <QuestionButton
              onClick={() => {
                navigate("/question");
              }}
            >
              Ask Question
            </QuestionButton>
          </HeadLine>
          <HeadLineTwo>
            <QuestionTotal>
              <p>22,927,831 questions</p>
            </QuestionTotal>
            <FilterBar>
              <FilterBarButton>Newest</FilterBarButton>
              <FilterBarButton>Active</FilterBarButton>
              <FilterBarButton>Bountied</FilterBarButton>
              <FilterBarButton>Unanswered</FilterBarButton>
              <SelectButton>
                <option>Frequent</option>
                <option>Score</option>
                <option>Unanswered</option>
                <option selected>More</option>
                <option>Custom Filters</option>
              </SelectButton>
              <FilterButton
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <IoIosMenu />
                Filter
              </FilterButton>
            </FilterBar>
          </HeadLineTwo>
          {modal === true ? <FilterMessage changeModal={changeModal} /> : null}
          {questions.map((a, i) => {
            const ddd = a.questionId;
            return (
              <>
                <FilteredQuestion>
                  <LeftBox>
                    <VotesDiv>votes</VotesDiv>
                    <AnswersDiv>answers</AnswersDiv>
                    <ViewsDiv>views</ViewsDiv>
                    <LikeDiv>+50</LikeDiv>
                  </LeftBox>
                  <RightBox key={i}>
                    <RightBoxSons
                      onClick={() => {
                        navigate(`/contents/${ddd}`);
                      }}
                    >
                      {questions[i].title}
                    </RightBoxSons>
                    <RightBoxSons2>{questions[i].body}</RightBoxSons2>
                    <RightBoxSons3>
                      <TagBox>tagtag</TagBox>
                      <CurrentAskedTime>
                        {questions[i].cratedAt}
                      </CurrentAskedTime>
                    </RightBoxSons3>
                  </RightBox>
                </FilteredQuestion>
              </>
            );
          })}
        </MainBar>
        <RightBar />
      </ArticleStyle>
    </MainPage>
  );
}

export default Article;
