import styled from "styled-components";


function RightBar(){
let RightBar = styled.div`
width: 30%;
padding-top: 25px;
height: auto;
@media screen and (max-width: 768px) {
  display: none;
}
`;
let RightBarBox = styled.div`
width: 80%;
height: auto;
border-radius: 5px;
background-color: rgb(252 247 228);
border: 1px solid rgb(239 229 192);
display: flex;
flex-direction: column;
`;
let YellowPost = styled.div`
width: auto;
height: 20px;
padding: 10px;
background-color: rgb(250 243 216);
border-bottom: 1px solid rgb(239 229 192);
font-size: 15px;
font-weight: 600;
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
`;
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
`;

return(
<RightBar>
    <RightBarBox>
    <YellowPost>The Overflow Blog</YellowPost>
    <SeeAll>
        What companies lose when they track worker productivity (Ep. 478)
    </SeeAll>
    <SeeAll>
        Functional programming is an ideal fit for developing blockchains
    </SeeAll>
    </RightBarBox>
</RightBar>
)


}


export default RightBar;
