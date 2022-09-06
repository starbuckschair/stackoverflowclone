import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Aside from './pages/Aside'
import { useEffect, useState } from "react";
import axios from "axios";
import RightBar from "./RightBar"
import { AiFillCaretUp, AiFillCaretDown,AiFillCarryOut,AiOutlineFieldTime, AiFillBug } from "react-icons/ai";

let ContentBasket = styled.div`
width: 100%;
margin: 0px;
/* padding-left: 5%;
padding-right: 5%; */
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
margin-left:50px;
margin-bottom: 200px;
float: left;
display:flex;
/* color:red; */
justify-content: right;
`

let ContentBox = styled.section`
width: 70%;
height: auto;
margin: 0.5%;
padding: 5px;
border-left: 1px solid rgb(216 217 220);
/* background-color: pink; */
display: flex;
justify-content: center;

@media screen and (max-width: 768px) {
  width: 98%;
}
`;

let MainContent = styled.div`
width: 100%;
box-sizing: border-box;
/* background-color: blue; */
display: flex;
flex-direction: column;
`
let InsertBox = styled.div`
width: 98%;
height: 60px;
background-color: white;
margin: 1%;
margin-bottom: 0;
color: black;
/* border-bottom: 1px solid rgb(168 169 171); */
display: flex;
justify-content: space-between;
align-items: center;
`;

let TitleBox = styled.div`
font-size: 26px;
font-weight: 600;
display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2 (integer);
  overflow: hidden;
float: left;
`;

let AskButton = styled.button`
 width: 110px;
  height: 40px;
  background-color: rgb(67 147 247);
  color: white;
  font-size: 13px;
  font-weight: bolder;
  margin: 2%;
  padding: 10px;
  text-align: center;
  border: 0;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: #0074cc;
    cursor: pointer;
  }
`;

let CurrentStateBox = styled.div`
width: 98%;
height: auto;
/* background-color: gray; */
margin: 1%;
margin-top: 0px;
border-bottom: 1px solid rgb(227 230 232);
font-size: 12px;
display: flex;
justify-content: flex-start;
`;

let AskedBox = styled.div`
width: 20%;
height: 20px;
/* border: 1px solid black; */
background-color: white;
color: black;
`;
let Body = styled.div`
width: 100%;
height: auto;
/* padding-top: 20px; */
/* background-color: yellow; */
display: flex;
justify-content: center;
`;
let ButtonGroup = styled.div`
width: 10%;
height: auto;
/* background-color: grey; */
margin: 0.5%;
margin-top: 0%;
padding-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;


let Buttons = styled.button`
width: 30px;
height: 30px;
margin-top: 15px;
/* margin-left: 15px; */
background-color: white;
color: rgb(187 191 195);
font-size: 20px;
text-align: center;
border: none;
`;

let UpDownButton = styled(Buttons)`
width: 50px;
height: 50px;
font-size: 40px;
display: flex;
justify-content: center;
align-items: center;
`

let Count = styled.div`
font-size: 20px;
width: 30px;
height: 30px;
margin-top: 15px;
color: rgb(109 115 123);

`;
let BodyMain = styled.div`
width: 98%;
height: auto;
margin:0;
/* background-color: pink; */
/* border: 1px solid black; */
`;
let BodyMainTitle = styled.div`
width: 90%;
height: auto;
padding-top: 5%;
/* background-color: black; */
font-size: 14px;
color: black;
word-break:break-all;
/* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3 (integer);
  overflow: hidden; */
border: 1px solid white;
`;
let CodeBox = styled.div`
width: 95%;
height: auto;
background-color: black;
color: white;
border: 1px solid white;
margin: 0.5%;
`;

let TagBox = styled.div`
width: 95%;
height: auto;
/* background-color: black; */
margin-top: 1%;
display: flex;
justify-content: flex-start;
`;

let CheckedTagBox = styled.div`
width: auto;
height: 15px;
background-color: rgb(227 236 243);
font-size: 12px;
padding:3px 5px;
color: rgb(73 114 153);
border-radius: 2px;
margin-right:2px;
`;

let CurrentStateLine = styled.div`
width: 95%;
height: 70px;
margin-top: 1%;
/* background-color: black; */
color: white;
font-size: 12px;
display: flex;
justify-content: space-between;
`;

let CurrentStateThree = styled.div`
width: 30%;
height: 60px;
/* margin: 5px; */
margin-right: 0;
/* background-color: white; */
color: rgb(49 114 198);
`;

let WriterBox = styled(CurrentStateThree)`
background-color: rgb(217 230 242);
border: none;
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
let CurrentButton = styled.button`
width: auto;
height: 15px;
background-color: white;
font-size: 13px;
color: rgb(108 115 123);
margin-right:1em;
border: none;
`;

let AskedTime = styled.div`
width: 95%;
height: 15px;
color: rgb(108 115 123);
margin: 0.5%;
display: flex;
/* justify-content: space-between; */
/* border: 1px solid white; */
`;

let SecondLine = styled.div`
width: 95%;
height: auto;
margin: 0.5%;
display: flex;
justify-content: space-between;
/* border: 1px solid white; */
`;

let IconBox = styled.div`
width: 30%;
height: 35px;
margin: 0.5%;
font-size: 35px;
color: rgb(224 92 51);
text-align: center;
/* border: 1px solid black; */
`;

let IdBox = styled.div`
width: 69%;
height: 35px;
margin: 0.5%;
/* border: 1px solid black; */
`;

let AddCommentLine = styled.div`
width: 95%;
height: 15px;
margin: 0.5%;
background-color: black;
color: white;
font-size: 12px;
border: 1px solid black;
`;
let YourAnswer = styled.div`
width: 100%;
height: auto;
/* background-color: yellow; */
display: flex;
flex-direction: column;
justify-content: center;
`;
let YourAnswerTitle = styled.div`
width: 100%;
height: 30px;
/* background-color: green; */
color: black;
font-size: 20px;
font-weight: 600;
`;

let YourAnswerInput = styled.input`
width: 100%;
height: 200px;
margin-top: 1%;
color: black;
border: 1px solid rgb(222 223 225);
border-radius: 2px;
`;
let PostYourAnswer = styled.div`
width: 100%;
height: auto;
margin-top: 1%;
display: flex;
justify-content: space-between;
`;
let PostYourAnswerButton = styled.button`
width: 20%;
height: 40px;
background-color: rgb(67 147 247);
color: white;
border-radius: 2px;
border: none;
box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
&:hover{
  background-color: hsl(209deg 100% 38%);
}
`;

let DeleteButton =styled(PostYourAnswerButton)`
width: 20%;
height: 40px;
background-color: red;
color: white;
border-radius: 2px;
border: none;
&:hover {
    background-color: rgb(163 35 28);
    cursor: pointer;
  } 
`

function Contents() {



    let {id} = useParams()
    
    let [choice, setChoice] = useState([])
    let navigate = useNavigate();
  
 
    useEffect(()=>{
            axios.get(`${process.env.REACT_APP_API_URL}`).then((res)=>{
                let copy = [...choice, ...res.data];
                // console.log(copy);
                setChoice(copy)
                // console.log(choice)

            })
            .catch(()=>{
              console.log('실패함')
            })
        
      },[])

    return(
      <ContentBasket>
        <Sidebar>
        <Aside />
        </Sidebar>
          {
            choice.filter((el)=>{
              return el.questionId === parseInt(id);
            }).map((el, key)=>{
              console.log(el)
              return(
              <ContentBox>
                <MainContent>
                  <InsertBox> 
                    <TitleBox key={key}>{el.title}</TitleBox>
                    <AskButton onClick={() => {navigate('/question');}}>Ask Question</AskButton>
                  </InsertBox>
                  <CurrentStateBox>
                    <AskedBox>Asked today</AskedBox>
                    <AskedBox>Modified today</AskedBox>
                    <AskedBox>Viewed 28times</AskedBox>
                  </CurrentStateBox>
                  <Body>
                    <ButtonGroup>
                      <UpDownButton><AiFillCaretUp/></UpDownButton>
                      <Count>-2</Count>
                      <UpDownButton><AiFillCaretDown/></UpDownButton>
                      <Buttons><AiFillCarryOut/></Buttons>
                      <Buttons><AiOutlineFieldTime/></Buttons>
                    </ButtonGroup>
                    <BodyMain>
                      <BodyMainTitle>
                        {el.body}
                      </BodyMainTitle>
                      
                    
                      <TagBox>
                        <CheckedTagBox>macOS</CheckedTagBox>
                        <CheckedTagBox>command-line</CheckedTagBox>
                        <CheckedTagBox>homebrew</CheckedTagBox>
                        <CheckedTagBox>dnsmasq</CheckedTagBox>
                        <CheckedTagBox>laravel-valet</CheckedTagBox>
                      </TagBox>
                      <CurrentStateLine>
                        <CurrentStateThree>
                          <CurrentButton>Share</CurrentButton>
                          <CurrentButton>Edit</CurrentButton>
                          <CurrentButton>Follow</CurrentButton>
                        </CurrentStateThree>
                        <CurrentStateThree>
                          <p>edited Aug 16 at 23:38</p>
                        </CurrentStateThree>
                        <WriterBox>
                          <AskedTime>
                            <div>asked</div>
                            <div>Aug 16 at 20:04</div>
                          </AskedTime>
                          <SecondLine>
                            <IconBox><AiFillBug/></IconBox>
                            <IdBox>
                              <div>hello world</div>
                              <div>팔로워수 금 은 동</div>
                            </IdBox>
                          </SecondLine>
                        </WriterBox>
                      </CurrentStateLine>
                      {/* <AddCommentLine>Add a comment</AddCommentLine> */}
                      <YourAnswer>
                        <YourAnswerTitle>Your Answer</YourAnswerTitle>
                        <YourAnswerInput
                          type={"text"}
                          placeholder={
                            "댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳"
                          }
                        ></YourAnswerInput>
                        <PostYourAnswer key={key}>
                          <PostYourAnswerButton>
                            Post Your Answer
                          </PostYourAnswerButton>
                          <DeleteButton onClick={()=>{
                            
                          }}>
                            Delete
                          </DeleteButton>
                        </PostYourAnswer>
                      </YourAnswer>
                    </BodyMain>
                    <RightBar />
                  </Body>
                </MainContent>
            </ContentBox>
          );
              })}
              
      </ContentBasket>
  );
}

export default Contents;
