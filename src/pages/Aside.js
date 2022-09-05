import styled from "styled-components";
import { IoIosGlobe } from "react-icons/io";


let Menubar = styled.div`
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 200px;
  position: fixed;
  float: left;
  /* background-color: green; */
  display: flex;
  flex-direction:column;
  word-break:break-all;
;
`

let MainDish = styled.ol`
    width: 120px;
    margin-top:20px;
    font-size: 13px;
    color: rgb(83, 89, 95);
`
let HomeDiv = styled(MainDish)`
    font-weight: 600;
`

let SideDish = styled.li`
    margin-top:20px;
    font-size: 13px;
    padding-left: 30px;

`

let SideDishQuestions = styled.li`
    margin-top:0.5em;
    font-size: 20px;
    margin-left: 10px;
    padding: 4px;
    background-color: rgb(241 242 243);
    font-weight:bolder;
    color: black;
    position: static;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
let QuestionDiv = styled.div`
    padding-left: 4px;
    font-size: 13px;
`

function Aside(){
    return(
        <Menubar>
            <HomeDiv>Home</HomeDiv>
            <MainDish>PUBLIC
                <SideDishQuestions>
                    <IoIosGlobe/> 
                    <QuestionDiv>Questions</QuestionDiv>
                </SideDishQuestions>
                <SideDish> Tag</SideDish>
                <SideDish> Users</SideDish>
                <SideDish> Companies</SideDish>  
            </MainDish>  
        </Menubar>
    )
}

export default Aside;