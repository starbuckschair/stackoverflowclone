

function Header(){
    return(
        <header>
        <div className="logo">로고</div>
        <div className="product">Products</div>
        <input
          type="text"
          className="headerInput"
          placeholder="(돋보기아이콘)Search..."
        ></input>
        <div className="headerIcon">myIcon</div>
        <div className="headerIcon">icon1</div>
        <div className="headerIcon">icon1</div>
        <div className="headerIcon">icon1</div>
        <div className="headerIcon">icon1</div>
      </header>
    )
}

export default Header;