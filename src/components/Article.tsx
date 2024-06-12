import { useQuery } from '@tanstack/react-query';
import { IArticle } from '@/types';
import { getIssueById } from '@/apis';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useParams } from 'react-router-dom';

const Article = () => {
  const params = useParams();
  if (!params.id) return <div>not found</div>;
  const id = parseInt(params.id!);
  const { data, isLoading } = useQuery<IArticle | null>({
    queryKey: ['article', id],
    queryFn: () => getIssueById(id),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <span>No article found</span>;
  }

  return (
    <div className="mx-auto lg:w-2/3 md:w-full">
      <h1 className="mb-4 text-md font-bold">{data.title}</h1>
      <MarkdownPreview
        source={data.body}
        wrapperElement={{
          'data-color-mode': 'dark',
        }}
        style={{ padding: '8px', borderRadius: '6px', overflowX: 'scroll', flex: 1 }}
      />
    </div>
  );
};
export default Article;
