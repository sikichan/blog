import { getIssues } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types';

const Articles = () => {
  // const [articles, setArticles] = useState<IArticle[]>([]);
  const { data, error, isLoading } = useQuery<IArticle[]>({
    queryKey: ['articles'],
    queryFn: getIssues,
  });
  // const [loading, setLoading] = useState(true);
  if (!data || error) return <h1>none</h1>;
  return (
    <ul className="list-none lg:w-3/5 sm:w-2/3 mx-auto rounded">
      {isLoading ? (
        <span>loading...</span>
      ) : (
        data.map((article: IArticle) => (
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
