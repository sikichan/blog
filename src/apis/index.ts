import { IArticle } from '@/types';

export const getIssues = async () => {
  const res = await fetch('https://api.github.com/repos/sikichan/blog/issues');
  const data: IArticle[] = await res.json();
  return data;
};
