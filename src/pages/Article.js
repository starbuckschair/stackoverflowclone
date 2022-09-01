import Aside from "./Aside";
import FilterMessage from "../FilterMessage";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";


function Article() {
  let [questions, setQuestions] = useState([]);
  let [modal, setModal] = useState(false);
  let changeModal = () => {
    setModal();
  };
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:4000/question').then((res) => {
      console.log(res.data);
      let copy = [...questions, ...res.data];
      console.log(copy);
      setQuestions(copy);
    });
  }, []);

let MainPage = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;

`
let ArticleStyle = styled.div`
  width: 95%;
  height: auto;
  padding: 0.5%;
  padding-top: 50px;
  padding-left: 210px;
  float: right;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
`
let MainBar = styled.div`
  width: 58%;
  height: auto;
  margin: 0.5%;
  border-left: 1px solid rgb(216 217 220);

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
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    &:hover{
      background-color : #0074cc;
      cursor: pointer;
    }

`
let HeadLineTwo = styled.div`
  width: 96%;
  height: 50px;
  background-color: white;
  padding-left: 20px;
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
  width: auto;
  height: 35px;
  background-color: white;
  border: 1px solid rgb(216 217 220);
  font-size: 12px;
`
let FilteredQuestion = styled.div`
  width: 94%;
  height: auto;
  padding: 16px;
  margin-left: 2px;
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
`
let AnswersDiv = styled(LeftBoxSons)`
    color: rgb(83 140 93);
    border: 1px solid rgb(83 140 93);
    border-radius: 5px;
    text-align: center;
    height: 20px;
    font-weight: 500;
`
let ViewsDiv = styled(LeftBoxSons)`
  color: rgb(101 108 115);
`
let LikeDiv = styled(LeftBoxSons)`
  width: 40px;
  height: 20px;
  color: white;
  font-size: 14px;
  background-color: rgb(49 114 198);
  border-radius: 5px;
  text-align: center;
  margin:0%;
  padding-top: 3px;
`
let RightBox = styled.div`
  width: 85%;
  height: auto;
  background-color: white;
  font-size: 13px;
  color: black;
  margin-left: 2px;
  margin-bottom:20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
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
  word-break:break-all;

`
let RightBoxSons2 = styled.div`
  width: 98%;
  height: 30px;
  background-color: white;
  font-size: 12px;;
  margin-top: 5px;
  margin-bottom: 5px;
  /* border: 1px solid black; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2 (integer);
  overflow: hidden;
`
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
`
let TagBox = styled.div`
  width: auto;
  height: 14px;
  background-color: rgb(227 236 243);
  font-size: 13px;
  border-radius: 5px;
  padding: 6px 4.8px;
  color:rgb(72 114 153);
  margin-top: 0.5%;
  display: flex;
  text-align: center;
  align-items: center;
  word-break:break-all;
`
let CurrentAskedTime = styled.div`
  width: 30%;
  height: 20px;
  font-size: 12px;;
  color:rgb(82 87 93);
  margin: 0.5%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  word-break:break-all;
`
let RightBar = styled.div`
  width: 30%;
  padding-top: 25px;
  height: auto;
  @media screen and (max-width: 768px) {
  display: none;
}
`
let RightBarBox =styled.div`
  width: 80%;
  height:auto;
  border-radius: 5px;
  background-color: rgb(252 247 228);
  border:1px solid rgb(239 229 192);
  display: flex;
  flex-direction: column;

`
let YellowPost = styled.div`
  width: auto;
  height: 20px;
  padding: 10px;
  background-color: rgb(250 243 216);
  border-bottom:1px solid rgb(239 229 192);
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`
let SeeAll = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgb(252 247 228);
  border-radius: 5%;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left; 
  `


  return (
    <MainPage>
      <Aside />
      <ArticleStyle>
        <MainBar>
          <HeadLine>
            <AllQuestion>All Question</AllQuestion>
            <QuestionButton onClick={() => {
                        navigate('/question');
                      }}>
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
                  <option selected>
                    More
                  </option>
                  <option>Custom Filters</option>
                </SelectButton>
              <FilterButton
                onClick={() => {
                  setModal(!modal);
                }}
              >
              <IoIosMenu/>Filter
              </FilterButton>
            </FilterBar>
          </HeadLineTwo>
          {modal === true ? <FilterMessage changeModal={changeModal} /> : null}
          {
            questions.map((a, i)=>{
              const ddd = a.questionId;
              return(
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
                          { questions[i].title }
                        </RightBoxSons>
                        <RightBoxSons2>
                        { questions[i].body }
                        </RightBoxSons2>
                        <RightBoxSons3>
                          <TagBox>tagtag</TagBox>
                          <CurrentAskedTime>
                          { questions[i].cratedAt }
                          </CurrentAskedTime>
                        </RightBoxSons3>
                    </RightBox>
                  </FilteredQuestion>
                </>
              )
            })
          }
        </MainBar>
        <RightBar>
        <RightBarBox>
          <YellowPost>
            The Overflow Blog
          </YellowPost>
          <SeeAll>
           What companies lose when they track worker productivity (Ep. 478)
          </SeeAll>
          <SeeAll>
          Functional programming is an ideal fit for developing blockchains
          </SeeAll>
          </RightBarBox>
        </RightBar>
      </ArticleStyle>
    </MainPage>
  );
}

export default Article;
