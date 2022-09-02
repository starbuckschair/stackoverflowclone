import {Routes, Route, Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

//jj

let HeaderLine = styled.header`
  position: fixed;
  width: 100%;
  height: auto;
  padding: 0.5%;
  margin-top: 0;
  margin-bottom: 20px;
  border: 1px solid #61dafb;
  background-color: white;
  display: flex;
  
  @media screen and (max-width: 768px) {
    justify-content: space-around;
    }
  
`
let Logo = styled.div`
  width: 5%;
  height: 30px;
  margin: 0.5%;
  border: 1px solid red;
  @media screen and (max-width: 768px) {
    width: 10%;
    margin: 0.5%;
    }
`
let ProductButton = styled.button`
  width: 5%;
  height: 30px;
  font-size: 14px;
  margin: 0.5%;
  border: 1px solid red;
  @media screen and (max-width: 768px) {
    width: 10%;
    margin: 0.5%;
    }
`

let HeaderInput = styled.input`
  width: 60%;
  height: 30px;
  margin: 0.5%;
  border: 1px solid blue;
  @media screen and (max-width: 768px) {
    display: none;
    }
`

let IconBox = styled.div`
  width: 20%;
  height: 30px;
  margin: 0.5%;
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 40%;
    margin: 0.5%;
    }
`

let HeaderIcon = styled.div`
  width: 20%;
  height: 70%;
  margin: 0.5%;
  border: 1px solid red;
  flex: 1 1 0;
  @media screen and (max-width: 768px) {
    width: 20%;
    height: 70%;
    margin: 0.5%;
    }
`



function Header(){
    let navigate = useNavigate();
    return(
        <HeaderLine>
        <Logo onClick={()=>{navigate('/')}}>로고</Logo>
        <ProductButton>Products</ProductButton>
        <HeaderInput
          type="text"
          className="headerInput"
          placeholder="(돋보기아이콘)Search..."
        ></HeaderInput>
          <IconBox>
          <HeaderIcon onClick={()=>{navigate('/users')}}>myIcon</HeaderIcon>
          <HeaderIcon>icon1</HeaderIcon>
          <HeaderIcon>icon1</HeaderIcon>
          <HeaderIcon>icon1</HeaderIcon>
          <HeaderIcon>icon1</HeaderIcon>
        </IconBox>
      </HeaderLine>
    )
}

export default Header;