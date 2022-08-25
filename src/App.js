import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEarthAmericas } from '@fortawesome/fontawesome-svg-core';

function App() {
  return (
    <>
      <header>
        <h3>navbar menu1</h3>
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
