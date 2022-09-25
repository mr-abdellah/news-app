import { useAllNewsQuery } from "../../redux/newsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const allNews = useAllNewsQuery();
  allNews && console.log(allNews?.data?.articles);
  const firstPost = allNews && allNews?.data?.articles[0];

  return (
    <div id="Homepage">
      <h1>Top News</h1>
      <div className="first_post">
        <img src={firstPost?.urlToImage} alt="" />
        <div className="first_post_info">
          <p>
            <FontAwesomeIcon icon={faClock} />{" "}
            {firstPost?.publishedAt.slice(0, 10)}
          </p>
          <h4>{firstPost?.title}</h4>
          <p>{firstPost?.description}</p>
        </div>
      </div>
      <div className="homepage-posts">
        {allNews &&
          allNews?.data?.articles
            .filter((i) => i.urlToImage != null && i.urlToImage)
          .map((article, index) => {
            console.log(article);
            return (
              <div className="homepage_post" key={index}>
                <img src={article?.urlToImage} alt={article?.title} />
                <p>{article?.publishedAt.slice(0, 10)}</p>
                <h4>{article?.title}</h4>
                <p>
                  <a href={article.url} target='_blank'>{article.description}</a>
                </p>
              </div>
            );})}
      </div>
    </div>
  );
};

export default Homepage;

// allNews.data.articles.length;


