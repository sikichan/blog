import { IArticle } from '@/types';

export const getIssues = async () => {
  const res = await fetch('https://api.github.com/repos/sikichan/blog/issues');
  const data: IArticle[] = await res.json();
  return data;
};

export const getIssueById = async (id: number): Promise<IArticle | null> => {
  const res = await fetch(`https://api.github.com/repos/sikichan/blog/issues/${id}`);
  const data: IArticle = await res.json();
  return data || null;
};
