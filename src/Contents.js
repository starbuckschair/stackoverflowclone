import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Aside from './pages/Aside'
import { useEffect, useState } from "react";
import axios from "axios";

let ContentBox = styled.section`
  /* margin-top:70px; */
  width: 75%;
  height: auto;
  padding-top: 70px;
  background-color: pink;
  margin-left: 20%;
  box-sizing: border-box;
`;
let InsertBox = styled.div`
  width: 90%;
  height: 60px;
  background-color: green;
  margin: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

let TitleBox = styled.div`
  font-size: 20px;
  float: left;
`;

let AskButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: blue;
  color: white;
`;

let CurrentStateBox = styled.div`
  width: 90%;
  height: 40px;
  background-color: gray;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
`;

let AskedBox = styled.div`
  width: 20%;
  height: 20px;
  border: 1px solid black;
  background-color: white;
  color: black;
`;
let Body = styled.div`
  width: 75%;
  height: auto;
  padding-top: 20px;
  background-color: black;
  margin-left: 10px;
  display: inline-flex;
`;
let Sidebar = styled.div`
  width: 10%;
  height: 900px;
  background-color: white;
  margin: 0.5%;
  margin-left: 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let Buttons = styled.button`
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  margin: 15px;
`;
let Count = styled.div`
  font-size: 20px;
  border: 1px solid black;
  width: 30px;
  height: 30px;
`;
let BodyMain = styled.div`
  margin: 0.5%;
  width: 80%;
  height: auto;
  background-color: white;
  border: 1px solid black;
`;
let BodyMainTitle = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;
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
  background-color: black;
  color: white;
  border: 1px solid white;
  margin: 0.5%;
  display: flex;
  justify-content: flex-start;
`;

let CheckedTagBox = styled.div`
  width: auto;
  height: 15px;
  background-color: white;
  font-size: 12px;
  color: black;
  border: white;
  margin: 1%;
`;

let CurrentStateLine = styled.div`
  width: 95%;
  height: 70px;
  margin: 1%;
  background-color: black;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
`;

let CurrentStateThree = styled.div`
  width: 30%;
  height: 60px;
  margin: 5px;
  background-color: white;
  color: black;
`;
let CurrentButton = styled.button`
  width: auto;
  height: 15px;
  background-color: white;
  color: black;
  margin: 0.5%;
`;

let AskedTime = styled.div`
  width: 95%;
  height: 15px;
  background-color: black;
  color: white;
  margin: 0.5%;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
`;

let SecondLine = styled.div`
  width: 95%;
  height: auto;
  margin: 0.5%;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
`;

let IconBox = styled.div`
  width: 30%;
  height: 35px;
  margin: 0.5%;
  border: 1px solid black;
`;

let IdBox = styled.div`
  width: 69%;
  height: 35px;
  margin: 0.5%;
  border: 1px solid black;
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
  width: 95%;
  height: auto;
  margin: 0.5%;
  background-color: black;
  border: 1px solid black;
`;
let YourAnswerTitle = styled.div`
  width: 95%;
  height: 30px;
  margin: 0.5%;
  background-color: black;
  color: white;
  font-size: 20px;
  border: 1px solid black;
`;

let YourAnswerInput = styled.input`
  width: 95%;
  height: 200px;
  margin: 0.5%;
  background-color: black;
  color: white;
  border: 1px solid white;
`;
let PostYourAnswer = styled.div`
  width: 95%;
  height: auto;
  margin: 0.5%;
  background-color: black;
  color: white;
  border: 1px solid white;
`;
let PostYourAnswerButton = styled.button`
  width: 30%;
  height: 40px;
  background-color: white;
  color: black;
`;

function Contents() {
    let {id} = useParams()
    let [choice, setChoice] = useState([])
    let navigate = useNavigate();
    
 
    useEffect(()=>{
            axios.get(`http://localhost:4000/question`).then((res)=>{
                let copy = [...choice, ...res.data];
                // console.log(copy);
                setChoice(copy)
                // console.log(choice)

            })
            .catch(()=>{
              console.log('실패함')
            })
        
      },[])

  //   console.log(choice[0].userId);

    return(
        <>
            <Aside />
                {
                  choice.filter((el)=>{
                      return el.questionId === parseInt(id)+1;
                    }).map((el, key)=>{
                      console.log(el)
                    return(
                    <ContentBox>
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
                <Sidebar>
                  <Buttons>⬆︎</Buttons>
                  <Count>-2</Count>
                  <Buttons>⬇︎</Buttons>
                  <Buttons>📌</Buttons>
                  <Buttons>🔄</Buttons>
                </Sidebar>
                <BodyMain>
                  <BodyMainTitle>
                    This bounty has ended. Answers to this question are eligible
                    for a +50 reputation bounty. Bounty grace period ends in 22
                    hours. Zeno Popovici is looking for an answer from a
                    reputable source.
                  </BodyMainTitle>
                  <p>
                    I'm trying to get Valet running on a new MacBook Pro running
                    macOS 12.3. Homebrew, PHP, and Composer are all installed
                    just fine and functioning (to the extent of my knowledge).
                  </p>
                  <p>
                    However, once I installed Valet and tried to ping
                    foobar.test it's not returning 127.0.0.1 (it's some
                    198.#.#.# IP) and I cannot access it in my browser either. I
                    get a ERR_CONNECTION_RESET message.
                  </p>
                  <p>
                    If I go to 127.0.0.1 or localhost directly in my browser, I
                    get the "404 - Not Found" Valet message I'd expect.
                  </p>
                  <p>Running brew services list, I get the following:</p>
                  <CodeBox>
                    {" "}
                    Name Status User File dnsmasq error 512 root
                    ~/Library/LaunchAgents/homebrew.mxcl.dnsmasq.plist mariadb
                    started root
                    ~/Library/LaunchAgents/homebrew.mxcl.mariadb.plist nginx
                    error 256 root
                    ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist php started
                    root ~/Library/LaunchAgents/homebrew.mxcl.php.plist unbound
                    error 256 root
                    ~/Library/LaunchAgents/homebrew.mxcl.unbound.plist
                  </CodeBox>
                  <p>
                    The "error" statuses seem suspect, but I've been battling
                    those for years on previous machines where Valet does work.
                  </p>
                  <p>
                    I've tried restarting my MacBook, restarting Valet (also as
                    sudo), and removing/reinstalling Valet. Nothing seems to
                    help.
                  </p>
                  <p>
                    Not sure what to try since nothing resulted in errors during
                    installation. All community posts seem to point to
                    reinstalling Valet, which as mentioned, doesn't seem to
                    help.
                  </p>
                  <p>Any ideas?</p>
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
                    <CurrentStateThree>
                      <AskedTime>
                        <div>asked</div>
                        <div>Aug 16 at 20:04</div>
                      </AskedTime>
                      <SecondLine>
                        <IconBox>Icon.img</IconBox>
                        <IdBox>
                          <div>id</div>
                          <div>팔로워수 금 은 동</div>
                        </IdBox>
                      </SecondLine>
                    </CurrentStateThree>
                  </CurrentStateLine>
                  <AddCommentLine>Add a comment</AddCommentLine>
                  <YourAnswer>
                    <YourAnswerTitle>Your Answer</YourAnswerTitle>
                    <YourAnswerInput
                      type={"text"}
                      placeholder={
                        "댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳 댓글다는곳"
                      }
                    ></YourAnswerInput>
                    <PostYourAnswer>
                      <PostYourAnswerButton>
                        Post Your Answer
                      </PostYourAnswerButton>
                    </PostYourAnswer>
                  </YourAnswer>
                </BodyMain>
              </Body>
            </ContentBox>
          );
        })}
    </>
  );
}

export default Contents;
