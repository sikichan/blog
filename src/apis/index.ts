import { IArticle } from '@/types';

export const getIssues = async () => {
  const res = await fetch(
    `https://api.github.com/repos/sikichan/blog/issues?page=1&per_page=10&creator=sikichan`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_BLOG_TOKEN}`,
      },
    },
  );
  const data: IArticle[] = await res.json();
  return data;
};

export const getIssueById = async (id: number): Promise<IArticle | null> => {
  const res = await fetch(`https://api.github.com/repos/sikichan/blog/issues/${id}`);
  const data: IArticle = await res.json();
  return data || null;
};
