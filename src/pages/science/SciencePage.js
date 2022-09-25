import "../Page.css";
import { useScienceNewsQuery } from ".././../redux/newsSlice";

const SciencePage = () => {
  const {isSuccess, data } = useScienceNewsQuery();
  const ScienceNews = data?.articles;
  return (
    <div id="SciencePage">
      <h1>Science News</h1>
      <div className="posts">
        {isSuccess &&
          ScienceNews.map((article, index) => (
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

export default SciencePage;
