export interface IArticle {
  url: string;
  repository_url: string;
  title: string;
  id: number;
  labels: ILabel[];
  created_at: string;
  updated_at: string;
  body: string;
  number: number;
}

export interface ILabel {
  id: number;
  name: string;
  color: string;
}
