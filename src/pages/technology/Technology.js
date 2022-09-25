import "../Page.css";
import { useTechnologyNewsQuery } from ".././../redux/newsSlice";

const Technology = () => {
  const { isError, isLoading, isSuccess, data } = useTechnologyNewsQuery();
  const technologyNews = data?.articles;
  return (
    <div id="Technology">
      <h1>Technology News</h1>
      <div className="posts">
        {isSuccess &&
          technologyNews.map((article, index) => (
            <div className="homepage_post post" key={index}>
              <img src={article?.urlToImage} alt={article?.title} />
              <p>{article?.publishedAt.slice(0, 10)}</p>
              <h4>{article?.title}</h4>
              <p>
                <a href={article.url} target="_blank">
                  {article.description}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Technology;
