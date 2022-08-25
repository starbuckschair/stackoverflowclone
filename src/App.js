import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/fontawesome-svg-core';

function App() {
  return (
    <>
      <header>
        <div className='logo'>로고</div>
        <div className='product'>Products</div>
        <input type="text" className="headerInput" placeholder="(돋보기아이콘)Search..."></input>
        <div className='headerIcon'>myicon</div>
        <div className='headerIcon'>icon1</div>
        <div className='headerIcon'>icon1</div>
        <div className='headerIcon'>icon1</div>
        <div className='headerIcon'>icon1</div>
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
          <div>content1</div>
          <div>content2</div>
        </article>
      </section>
      <footer>
        <div>footer내용 </div>
        {/* 주소입력 */}
      </footer>
    </>
  );
}

export default App;
