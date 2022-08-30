import AskQ from "../routes/AskQ";
import FilterMessage from "../FilterMessage";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



function Article() {
  let [questions, setQuestions] = useState([])
  let [modal, setModal] = useState(false);
  let changeModal = () => {
    setModal();
  };
  let navigate = useNavigate();
  
    useEffect(()=>{
      axios.get(`http://ec2-15-164-171-167.ap-northeast-2.compute.amazonaws.com:8080/questions`)
      .then(res=>{
        console.log(res.data)
        let copy = [...questions, ...res.data]
        setQuestions(copy);


      });
    }, []);

    
  return (
    <article>
      <div className="mainBar">
        <section>
          <div className="headline">All Question</div>
          <div className="questionButton">
            <Link to="./question">
              <button onClick={() => AskQ()}>Ask Question</button>
            </Link>
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
              {/* <select id="uclass">
                <option value="archi">Frequent</option>
                <option value="mechanic">Score</option>
                <option value="indust">Unanswered</option>
                <option value="computer" selected>
                  More
                </option>
                <option value="chemical">Custom Filters</option>
              </select> */}
            </div>
            <div
              className="filterBarButton"
              onClick={() => {
                setModal(!modal);
              }}
            >
              filter
            </div>
          </div>
        </section>
        {modal === true ? <FilterMessage changeModal={changeModal} /> : null}
        <section>
          <div className="filteredQuestion">
            <div className="leftBox">
              <div className="leftBoxSons">votes</div>
              <div className="leftBoxSons">answers</div>
              <div className="leftBoxSons">views</div>
            </div>
            <div className="rightBox">
              {
                questions.map((a, i)=>{
                  return(
                    <div key={i}>
                    <div className="rightBoxSons"
                     onClick={() => {
                      navigate(`/contents/${i}`);
                    }}
                  >
                    { questions[i].title }
                  </div>
                  <div className="rightBoxSons2" >
                   { questions[i].body }
                  </div>
                  <div className="rightBoxSons3" >
                    <div className="tagBox">{ questions[i].tagList }</div>
                    <div className="currentAskedTime">
                    { questions[i].cratedAt }
                    </div>
                  </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </section>
      </div>
      <div className="rightBar">
        <section className="rightSide">
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
        </section>
      </div>
    </article>
  );
}

export default Article;
