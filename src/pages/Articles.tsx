import { getIssues } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types';
import { useNavigate } from 'react-router-dom';
import Label from '@/components/Label.tsx';

const Articles = () => {
  const { data, error, isLoading } = useQuery<IArticle[]>({
    queryKey: ['articles'],
    queryFn: getIssues,
  });
  const navigate = useNavigate();
  if (!data || error) return <h1>none</h1>;
  return (
    <ul className="list-none lg:w-3/5 md:w-full mx-auto">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        data.map((article: IArticle) => (
          <li
            className="font-medium py-4 px-2 hover:shadow-md hover:cursor-pointer hover:scale-15 transition ease-in duration-200"
            key={article.id}
            onClick={() => navigate(`/articles/${article.number}`)}
          >
            {article.title}
            {article.labels?.length > 0 &&
              article.labels.map((label) => (
                <Label key={label.id} color={`#${label.color}`} name={label.name} />
              ))}
          </li>
        ))
      )}
    </ul>
  );
};
export default Articles;
