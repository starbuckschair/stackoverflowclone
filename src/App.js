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
        {/* <h3><FontAwesomeIcon icon={faEarthAmericas} />Question</h3> */}
        <p> Tag</p>
        <p> Users</p>
        <p> Companies</p>
      </aside>
      <section>
        <article>
          <div>
            <div>content1</div>
            <div>content2</div>
          </div>
          <div className="rightco">
            <div className="yellowpost">
              <h4>The Overflow Blog</h4>
              <h4>Featured on Meta</h4>
            </div>
            <div className="seeall">
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
        <div>logoicon</div>
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
          <h4>STACK OVERFLOW NESTWORK</h4>
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
