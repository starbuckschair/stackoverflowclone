import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/fontawesome-svg-core';

function App() {
  return (
    <>
      <header>
        <div className="logo">로고</div>
        <div className="product">Products</div>
        <input
          type="text"
          className="headerInput"
          placeholder="(돋보기아이콘)Search..."
        ></input>
        <div className="headerIcon">myicon</div>
        <div className="headerIcon">icon1</div>
        <div className="headerIcon">icon1</div>
        <div className="headerIcon">icon1</div>
        <div className="headerIcon">icon1</div>
      </header>
      <aside>
        <h3>Home</h3>
        <h3>PUBLIC</h3>
        {/* <h3><FontAwesomeIcon icon={faEarthAmericas} />Question</h3> */}        <p> Tag</p>
        <p> Users</p>
        <p> Companies</p>
      </aside>

      <article>
        <section>
          <div className="headline">All Question</div>
          <div className="questionButton">
          <button>Ask Question</button>
          </div>
        </section>
        <section>
          <div className="TotalQuestions">
            <p>22,927,831 questions</p>
          </div>
          <div className="filterBar">
            <div className="filterBarButton">Newest</div>
            <div className="filterBarButton Active">Active</div>
            <div className="filterBarButton Bountied">Bountied</div>
            <div className="filterBarButton Unanswered">Unanswered</div>
            <div className="filterBarButton">
            
  					<select id="uclass">
  						<option value="archi">Frequent</option>
  						<option value="mechanic">Score</option>
  						<option value="indust">Unanswered</option>
  						<option value="elec">전기전자공학과</option>
  						<option value="computer" selected>More</option>
  						<option value="chemical">Custom Filters</option>
  					</select>
            </div>
            <div className="filterBarButton">filter</div>
          </div>
        </section>
        <section>
          <div className="filteredQuestion">
            <div className="leftBox">
              <div className="leftBoxSons">votes</div>
              <div className="leftBoxSons">answers</div>
              <div className="leftBoxSons">views</div>
            </div>
            <div className="rightBox">
              <div className="rightBoxSons">volume sizing attached to EC2</div>
              <div className="rightBoxSons2">Inside an EC2 I have docker with a container that I can't lose, so I noticed that I was out of space on the attached and exclusive volume for docker. So I increased it with another 15GB and execut</div>
              <div className="rightBoxSons3">
                <div className="tagBox">tag tag tag</div>
                <div className="currentAskedTime">
                user avatar David 264 asked 1 min ago
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section>
        <article>
          <div>
            <div>content1</div>
            <div>content2</div>
          </div>
          <div className="rightCo">
            <div className="yellowPost">
              <h4>The Overflow Blog</h4>
              <h4>Featured on Meta</h4>
            </div>
            <div className="seeAll">
              <h4>Collective</h4>
              <p>
                Google Cloud<button>join</button>
              </p>

              <p>
                GitLab<button>join</button>
              </p>

              <p>
                WSO2<button>join</button>
              </p>
            </div>
          </div>
        </article>
      </section>
      <footer>
        <div>logo icon</div>
        <div>
          <p>STACK OVERFLOW</p>
          <h4>Question</h4>
          <p>Help</p>
        </div>
        <div>
          <h4>PRODUCT</h4>
        </div>
        <div>
          <h4>COMPANY</h4>
        </div>
        <div>
          <h4>STACK OVERFLOW NETWORK</h4>
        </div>
        <div>
          <p>Blog</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>instagram</p>
          <div>footer내용 </div>
        </div>
        {/* 주소입력 */}
      </footer>
    </>
  );
}

export default App;
