import React, { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/articleApi";
import { copy, linkIcon, loader, tick } from "../assets";

function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async function (e) {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });
    console.log(data);

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updateAllArticles);

      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl" id="demo">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Paste the article link"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            className="url_input peer"
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-orange-600 peer-focus:text-orange-600"
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Demo;
