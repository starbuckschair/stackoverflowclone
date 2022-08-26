import styled from 'styled-components'


let Box = styled.div`
  width:701px;
  height: 153.656px;
  padding: 12px 16px 12px 16px;
  background-color : grey;
  display: flex;
  justify-content: space-around;
`;

let FilterBox = styled.div`
    width:161px;
    height: 153px;
    margin: 16px;
    font-size: 13px;
 
`
let FilterTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
`
let ApplyBox = styled.div`
    width:710px;
    height: 35px;
    background-color: rgb(241,242,243);
`
let ApplyButton = styled.button`
    width:90px;
    height: 30px;
    padding:9.6px;
    border: 1px solid black;
    margin: 2px 0px 2px 0px;
    background-color: blue;
    color: white;
    float: left;
`

let SaveButton = styled.button`
    width:150px;
    height: 30px;
    background-color: red;
    float: left;
    margin-left: 10px;
    margin-top: 2px;
`

let CancelButton =styled.button`
    width:90px;
    height:30px;
    color: blue;
    float: right;
`

function FilterMessage({changeModal}) {
   return(
    <div>
    <Box> 
     <FilterBox>
         <FilterTitle>Filter by</FilterTitle>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">No answers</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">No accepted answer</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">No bounty</label>
         </div>
     </FilterBox>
     <FilterBox>
         <FilterTitle>Sorted by</FilterTitle>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">Newest</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">Recent activity</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">Highest score</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">Most Frequent</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">Bounty ending soon</label>
         </div>
     </FilterBox>
     <FilterBox>
         <FilterTitle>Filter by</FilterTitle>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">My watched tags</label>
         </div>
         <div>
             <input type="checkbox" id="yes" name="yes" />
             <label for="yes">The following tags:</label>
             <input type="text" placeholder="e.g.javascript or python"/>
         </div>
     </FilterBox>
    </Box>
    <ApplyBox>
     <ApplyButton>Apply filter</ApplyButton>
     <SaveButton>Save custom filter</SaveButton>
     <CancelButton onClick={()=>{changeModal()}}>Cancel</CancelButton>
    </ApplyBox> 
    </div>
   )
}



export default FilterMessage;