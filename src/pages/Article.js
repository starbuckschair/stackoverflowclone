
function Article(){
    return(
        <article>
        <div className="mainBar">
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
    )
}

export default Article;