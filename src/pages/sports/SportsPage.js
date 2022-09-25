import "../Page.css";
import { useSportsNewsQuery } from ".././../redux/newsSlice";

const SportsPage = () => {
  const {isSuccess, data } = useSportsNewsQuery();
  const sportsNews = data?.articles;
  console.log(sportsNews);
  return (
    <div id="SportsPage">
      <h1>Sports News</h1>
      <div className="posts">
        {isSuccess &&
          sportsNews.map((article, index) => (
            <div className="homepage_post post" key={index}>
              <img src={article?.urlToImage} alt={article?.title} />
              <p>{article?.publishedAt.slice(0, 10)}</p>
              <h4>{article?.title}</h4>
              <p>
                <a href={article.url} rel="noreferrer" target="_blank">
                  {article.description}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SportsPage;
