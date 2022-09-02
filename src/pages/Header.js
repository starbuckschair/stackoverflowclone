import {Routes, Route, Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import { GoInbox } from 'react-icons/go';
import { AiFillTrophy, AiOutlineQuestionCircle, AiFillMessage } from 'react-icons/ai';
import { IoIosFingerPrint } from 'react-icons/io';




let HeaderLine = styled.header`
  position: fixed;
  width: 100%;
  height: auto;
  padding: 0.5%;
  margin-top: 0;
  margin-bottom: 20px;
  background-color: rgb(249 249 249);
  box-shadow: 3px 2px 14px -6px rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    justify-content: space-around;
    }
  
`
let Logo = styled.div`
  width: 150px;
  height: 30px;
  margin: 0.5%;
  /* border: 1px solid red; */
  background-image: url("./stacklogo.png");
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 50px;
    margin: 0.5%;
    background-image: url("./minilogo.png");
    background-position: center;
    background-size: cover;
    }
`
let ProductButton = styled.button`
  width: 6%;
  height: 30px;
  font-size: 14px;
  margin: 0.5%;
  background-color: rgb(249 249 249);
  align-items: center;
  box-shadow: none;
  border: none;
  cursor: pointer;
  &:hover{       
  background-color : rgb(228 230 232);   
  border-radius: 20px;  
  color : black;   
  }
  @media screen and (max-width: 768px) {
    width: 10%;
    margin: 0.5%;
    }
`

let HeaderInput = styled.input`
  width: 50%;
  height: 30px;
  margin: 0.5%;
  border: 1px solid rgb(188 191 195);
  border-radius: 5px;
  background-image:url('./baseline_search_black_24dp.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding-left: 40px;

  @media screen and (max-width: 768px) {
    display: none;
    }
`

// let MagniIcon = styled.div`

// `

let IconBox = styled.div`
  width: 20%;
  height: 30px;
  margin: 0.5%;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 40%;
    margin: 0.5%;
    }
`

let HeaderIcon = styled.div`
  width: 15%;
  height: auto;
  margin: 3px;
  font-size: 22px;
  color: rgb(83 89 95);
  @media screen and (max-width: 768px) {
    width: 20%;
    height: 70%;
    margin: 0.5%;
    }
`



let HeaderIconBox = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
`



function Header(){
    let navigate = useNavigate();
    return(
        <HeaderLine>
        <Logo onClick={()=>{navigate('/')}}>
        </Logo>
        <ProductButton>Products</ProductButton>
        <HeaderInput
          type="text"
          className="headerInput"
          placeholder="Search..."
        >

        </HeaderInput>
          <IconBox>     
            <HeaderIconBox>
              <HeaderIcon onClick={()=>{navigate('/users')}}>
                <IoIosFingerPrint />
              </HeaderIcon>
              <HeaderIcon>< GoInbox /></HeaderIcon>
              <HeaderIcon>< AiFillTrophy /></HeaderIcon>
              <HeaderIcon>< AiOutlineQuestionCircle /></HeaderIcon>
              <HeaderIcon>< AiFillMessage /></HeaderIcon>
            </HeaderIconBox>
        </IconBox>
      </HeaderLine>
    )
}

export default Header;