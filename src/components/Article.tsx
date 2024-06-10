import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types';
import { getIssueById } from '@/apis';

const Article = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useQuery<IArticle | null>({
    queryKey: ['article', id],
    queryFn: () => getIssueById(id),
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {(error as Error).message}</span>;
  }

  if (!data) {
    return <span>No article found</span>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};
export default Article;
