import logo from './logo.svg';
import './App.css';

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
        <h3>sidebar menu1</h3>
        <h3>sidebar menu1</h3>
        <h3>sidebar menu1</h3>
        <h3>sidebar menu1</h3>
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
