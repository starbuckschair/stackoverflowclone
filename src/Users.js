import styled from 'styled-components'

let UsersQuestions = styled.div`
    padding-top: 80px;
    margin-left: 22%;
    width: 70%;
    height: auto;
    background-color: black;
    color: white;
    border: 1px solid black;
`
let TitleBox = styled.div`
    width: 95%;
    height: auto;
    background-color: white;
    border: 1px solid white;
    display: flex;
`
let UserBoxLeft = styled.div`
    width: 20%;
    height: auto;
    margin: 0.5%;
    padding: 0.5%;
    background-color: black;
    border: 1px solid white;
    display: flex;
    justify-content: center;
`
let UserImage = styled.div`
    width: 128px;
    height: 128px;
    background-color: pink;
    border: 1px solid black;
   
`
let UserBoxRight = styled.div`
    width: 78%;
    height: auto;
    margin: 0.5%;
    background-color: black;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
let NameBox = styled.div`
    width: 98%;
    height: auto;
    font-size: 30px;
    background-color: white;
    color: black;
    margin: 0.5%;
`
let StateBox = styled.div`
    width: 98%;
    height: auto;
    font-size: 12px;
    background-color: white;
    color: black;
    margin: 0.5%;
`
let MainBox = styled.div`
    width: 95%;
    height: auto;
    margin: 0.5%;
    font-size: 12px;
    background-color: black;
    color: black;
    border: 1px solid white;  
    display: flex;
`
let MainBoxSide = styled.div`
    width: 10%;
    height: 600px;
    margin: 0.5%;
    background-color: white;
    color: black;
    font-size: 12px;
    border: 1px solid black;
`
let MainBoxContents = styled.div`
    width: 98%;
    height: 600px;
    margin: 0.5%;
    background-color: white;
    color: black;
    font-size: 12px;
    border: 1px solid black;
`
let QuestionCount = styled.div`
    width: 98%;
    height: auto;
    margin:0.5%;
    font-size: 25px;
    color:black;
    background-color: white;
    border: 1px solid black;
`
let AskedQuestion = styled.div`
    width: 98%;
    height: auto;
    margin:0.5%;
    font-size: 23px;
    color:black;
    background-color: white;
    border: 1px solid black;
`
let DeleteBox = styled.div`
    width: 95%;
    height: auto;
    margin:0.5%;
    color:black;
    background-color: white;
    border: 1px solid black;
`
let DeleteButton = styled.button`
    width: auto;
    height: auto;
    margin: 0.5%;
    padding: 0.5%;
    color: blue;
    font-size: 18px;
    background-color: white;
    border: 1px solid black;
`

function Users(){

        
    return(
        <UsersQuestions>
            <TitleBox>
                <UserBoxLeft>
                    <UserImage></UserImage>
                </UserBoxLeft>
                <UserBoxRight>
                    <NameBox>ENJUINSTARBUCKS</NameBox>
                    <StateBox>
                        🎂Member for 7 days⏱Last seen this week🗓Visited 5 days, 1 consecutive
                    </StateBox>
                </UserBoxRight>   
            </TitleBox>
            <MainBox>
                <MainBoxSide>
                    <div>Summary</div>
                </MainBoxSide>
                <MainBoxContents>
                    <QuestionCount>1 Questions</QuestionCount>
                    <AskedQuestion>UITableView CustomCell Reuse(ImageView in CustomCell)</AskedQuestion>
                    <DeleteBox>
                        <DeleteButton>Deleted questions</DeleteButton>
                    </DeleteBox>
                </MainBoxContents>
            </MainBox>
        </UsersQuestions>
    )
}

export default Users;