import { IArticle } from '@/types';
import { useEffect, useState } from 'react';
import { getIssues } from '@/apis';

const Articles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getIssues().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [getIssues]);
  return (
    <ul className="list-none lg:w-3/5 sm:w-2/3 mx-auto rounded">
      {loading ? (
        <span>loading...</span>
      ) : (
        articles.map((article) => (
          <li
            className="font-medium p-4 hover:shadow-md hover:cursor-pointer hover:scale-5 transition ease-in duration-200"
            key={article.id}
          >
            {article.title}
          </li>
        ))
      )}
    </ul>
  );
};
export default Articles;
