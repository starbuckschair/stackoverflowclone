import AskQ from "../routes/AskQ";
import FilterMessage from "../FilterMessage";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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

    let ArticleStyle = styled.div`
        width: 75%;
        height: auto;
        padding: 0.5%;
        padding-top: 70px;
        float: right;
        margin-bottom: 20px;
        border: 1px solid blue;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
    `

    let MainBar = styled.div`
      width: 80%;
      height: auto;
      margin: 0.5%;
    `
    let HeadLine = styled.div`
      width: 100%;
      height: auto;
      background-color: white;
      border: 1px solid gray;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
    `

    let AllQuestion = styled.div`
      width: 30%;
      height: auto;
      background-color: black;
      font-size: 25px;
      color: white;
      padding: 0.5%;
      margin: 0.5%;
    `

    let QuestionButton = styled.button`
        width: auto;
        height: 30px;
        background-color: black;
        color: white;
        font-size: 13px;
        margin: 2%;
    `
    let HeadLineTwo = styled.div`
      width: 100%;
      height: 30px;
      background-color: white;
      border: 1px solid gray;
      font-size: 20px;
      display: flex;
      justify-content: space-between;
    `
    let QuestionTotal = styled.div`
        width: 20%;
        height: 15px;
        font-size: 12px;
        margin-top: 0.5%;
    `
    let FilterBar = styled.div`
      width: 60%;
      height: 30px;
      background-color: white;
      font-size: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
    let FilterBarButton = styled.button`
      width: auto;
      height: 20px;
      margin: 0.5%;
      background-color: white;
      border: 1px solid gray;
      font-size: 11px;
      @media screen and (max-width: 768px) {
      display: none;
    }
    `
    let SelectButton = styled.select`
      width: auto;
      height: 20px;
      margin: 0.5%;
      background-color: white;
      border: 1px solid gray;
      font-size: 11px;
    `
    let RightBar = styled.div`
      width: 24%;
      height: auto;
      @media screen and (max-width: 768px) {
      display: none;
    }
    `
    let FilteredQuestion = styled.div`
      width: 99%;
      height: auto;
      padding: 0.5%;
      border: 1px solid black;
      background-color: white;
      color: black;
      font-size: 11px;
      display: flex;
      justify-content: center;
    `

    let LeftBox = styled.div`
    width: 10%;
    height: auto;
    background-color: black;
    font-size: 14px;
    margin:0.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `
    let LeftBoxSons = styled.div`
      width: 80%;
      height: 17px;
      background-color: white;
      color: black;
      margin:0.5%;
      text-align: center;
    `
  let RightBox = styled.div`
      width: 80%;
      height: auto;
      background-color: white;
      font-size: 13px;
      color: black;
      margin:0.5%;
  `
  let RightBoxSons = styled.div`
    width: 95%;
    height: 20px;
    background-color: white;
    font-size: 15px;;
    margin: 0.5%;
    border: 1px solid black;
    overflow: hidden;

  `

  let RightBoxSons2 = styled.div`
    width: 95%;
    height: 40px;
    background-color: white;
    font-size: 12px;;
    margin: 0.5%;
    border: 1px solid black;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3 (integer);
    overflow: hidden;
  `
  let RightBoxSons3 = styled.div`
    width: 95%;
    height: 20px;
    background-color: white;
    font-size: 12px;;
    margin: 0.5%;
    display: flex;
    justify-content: space-between;
  `

  let TagBox = styled.div`
    width: 30%;
    height: 20px;
    background-color: black;
    font-size: 12px;;
    color:white;
    margin: 0.5%;
    text-align: center;
  `
  let CurrentAskedTime = styled.div`
    width: 30%;
    height: 20px;
    background-color: black;
    font-size: 12px;;
    color:white;
    margin: 0.5%;
    text-align: center;
  `
  let YellowPost = styled.div`
    width: 98%;
    height: 200px;
    background-color:  rgb(252 247 228);
    margin: 0.5%;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-shadow: 0px 3px 31px -6px rgba(0,0,0,0.75);
  `

  let SeeAll = styled.div`
    width: 98%;
    height: 300px;
    margin-top: 20px;
    background-color: rgb(252 247 228);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-shadow: 0px 3px 31px -6px rgba(0,0,0,0.75);  
    `
  return (
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
            <FilterBarButton
              onClick={() => {
                setModal(!modal);
              }}
            >
              filter
            </FilterBarButton>
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
                  <LeftBoxSons>votes</LeftBoxSons>
                  <LeftBoxSons>answers</LeftBoxSons>
                  <LeftBoxSons>views</LeftBoxSons>
                  </LeftBox>
                  <RightBox>
                    <div key={i}>
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
                        <TagBox>tag1, tag2, tag3</TagBox>
                        <CurrentAskedTime>
                        { questions[i].cratedAt }
                        </CurrentAskedTime>
                      </RightBoxSons3>
                    </div>
                  </RightBox>
                </FilteredQuestion>
              </>
            )
          })
        }
      </MainBar>
      <RightBar>
        <YellowPost>
          <p>The Overflow Blog</p>
          <p>Featured on Meta</p>
        </YellowPost>
        <SeeAll>
          <h4>Collective</h4>
          <p>
            Google Cloud <button>join</button>
          </p>
          <p>
            GitLab <button>join</button>
          </p>
          <p>
            WSO2 <button>join</button>
          </p>
        </SeeAll>
      </RightBar>
    </ArticleStyle>
  );
}

export default Article;
