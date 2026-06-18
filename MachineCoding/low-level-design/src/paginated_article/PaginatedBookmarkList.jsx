import { useState } from "react";
import "./styles.css";
import { Star } from "lucide-react";

const ARTICLE_DATA = [
  {
    id: 1,
    content: "This is the content of article 1.",
    isBookMarked: false,
    title: "Article 1",
  },
  {
    id: 2,
    content: "This is the content of article 2.",
    isBookMarked: false,
    title: "Article 2",
  },
  {
    id: 3,
    content: "This is the content of article 3.",
    isBookMarked: false,
    title: "Article 1",
  },
  {
    id: 4,
    content: "This is the content of article 4.",
    isBookMarked: false,
    title: "Article 2",
  },
  {
    id: 5,
    content: "This is the content of article 5.",
    isBookMarked: false,
    title: "Article 1",
  },
  {
    id: 6,
    content: "This is the content of article 6.",
    isBookMarked: false,
    title: "Article 2",
  },
];
const PaginatedBookmarkList = () => {
  const ITEM_COUNT = 5;
  let maxPageCount;
  const [data, setData] = useState(ARTICLE_DATA);
  const [pageNumber, setPageNumber] = useState(0);

  if (data.length < ITEM_COUNT) {
    maxPageCount = 1;
  } else {
    maxPageCount =
      data.length % ITEM_COUNT === 0
        ? data.length / ITEM_COUNT
        : Math.floor(data.length / ITEM_COUNT) + 1;
  }
  const handlePrevPage = () => {
    if (pageNumber > 0) {
      setPageNumber((pageNumber) => pageNumber - 1);
    }
  };
  const handleNextPage = () => {
    if (pageNumber < maxPageCount - 1)
      setPageNumber((pageNumber) => pageNumber + 1);
  };

  const handleStarClick = (id) => {
    setData(
      data.map((article) =>
        article.id === id
          ? {
              ...article,
              isBookMarked: !article.isBookMarked,
            }
          : article
      )
    );
  };

  const handleShowBookmarked = (e) => {
    if (e.target.checked) {
      const new_data = data.filter((data) => {
        return data.isBookMarked;
      });
      setData(new_data);
    } else {
      setData(ARTICLE_DATA);
    }
  };
  return (
    <div className="container">
      <div className="article-section">
        <div className="header">
          <h1>Articles</h1>
          <div className="bookmark">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => handleShowBookmarked(e)}
            />
            <span>Show only bookmarked</span>
          </div>
        </div>
        <div>
          {data
            .slice(
              pageNumber * ITEM_COUNT,
              pageNumber * ITEM_COUNT + ITEM_COUNT
            )
            .map((article) => {
              return (
                <div key={article.id} className="article-item">
                  <div key={article.id}>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                  </div>
                  <div>
                    <button className="btn">
                      <Star
                        strokeWidth={0.5}
                        fill={article.isBookMarked ? "#FFD700" : "#D3D3D3"}
                        size={20}
                        onClick={() => handleStarClick(article.id)}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="page-info">
          <button
            onClick={(e) => handlePrevPage(e)}
            disabled={pageNumber === 0 ? true : false}
          >
            Prev
          </button>
          <p>
            Page {pageNumber + 1} of {maxPageCount}
          </p>
          <button
            onClick={(e) => handleNextPage(e)}
            disabled={pageNumber + 1 === maxPageCount ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaginatedBookmarkList;
