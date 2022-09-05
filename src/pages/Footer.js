import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-flow: row wrap;
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
`;
const Logo = styled.div`
  width: 35px;
  height: 37px;
  /* margin: 0.5%; */
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png");
  background-position: center;
  background-size: cover;
  flex: 0 0 45px;
`;
const NavArea = styled.nav`
  width: 860px;
  height: 250px;
  display: flex;
  div {
    /* height: 250px; */
    flex: 2 1 auto;
    flex-wrap: wrap;
    /* margin: 0 10 20 0; */
    > ul li {
      height: 20px;
      list-style: none;
      flex-direction: column;
      display: flex;
      justify-content: space-around;
      font-size: 13px;
      > h4 {
        margin: 10px;
      }
    }
  }
`;
const CommunityBox = styled.div`
  width: 270px;
  font-size: small;
  ul {
    display: flex;
    justify-content: space-between;
  }
`;

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <Logo />
        <NavArea>
          <div>
            <h4>STACK OVERFLOW</h4>
            <ul>
              <li>Question</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h4>PRODUCT</h4>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h4>STACK OVERFLOW NETWORK</h4>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </div>
        </NavArea>
        <CommunityBox>
          <div>
            <ul>
              <li>Blog</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>instagram</li>
            </ul>
          </div>
        </CommunityBox>
      </FooterContainer>
    </footer>
  );
}

export default Footer;
