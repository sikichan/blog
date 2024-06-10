import { getIssues } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types';
import { useState } from 'react';
import Article from '@/components/Article.tsx';

const Articles = () => {
  // const [articles, setArticles] = useState<IArticle[]>([]);
  const [currentId, setCurrentId] = useState<number | undefined>(undefined);
  const { data, error, isLoading } = useQuery<IArticle[]>({
    queryKey: ['articles'],
    queryFn: getIssues,
  });
  // const [loading, setLoading] = useState(true);
  if (!data || error) return <h1>none</h1>;
  console.log(data);
  return (
    <div className="flex">
      <ul className="list-none w-1/5">
        {isLoading ? (
          <span>loading...</span>
        ) : (
          data.map((article: IArticle) => (
            <li
              className="font-medium py-4 border-b-[1px] border-gray hover:shadow-md hover:cursor-pointer hover:scale-5 transition ease-in duration-200"
              key={article.id}
              onClick={() => setCurrentId(article.number)}
            >
              {article.title}
              {/*<Link to={`${article.id}`}>{article.title}</Link>*/}
            </li>
          ))
        )}
      </ul>
      <div className="ml-2">{currentId ? <Article id={currentId} /> : <div>none</div>}</div>
    </div>
  );
};
export default Articles;
