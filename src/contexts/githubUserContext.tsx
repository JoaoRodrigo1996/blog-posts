import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
}

interface IPostProps {
  id: number;
  title: string;
  body: string;
  number: number;
  created_at: string;
}

interface UserContextType {
  user: User;
  posts: IPostProps[];
  detailsPost: IPostProps;
  FetchGithubUser: (query?: string) => Promise<void>;
  getDetailsPost: (id: string | undefined) => Promise<void>;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

export const GithubUserContext = createContext({} as UserContextType);

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const [detailsPost, setDetailPost] = useState<IPostProps>({} as IPostProps);

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const repoName = import.meta.env.VITE_GITHUB_REPONAME;

  async function FetchGithubUser(query?: string) {
    const response = await api.get(`/users/${username}`, {
      params: { _sort: "createdAt", _order: "desc", q: query },
    });

    setUser(response.data);
  }

  async function getPosts(query: string = "") {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${username}/${repoName}`
    );

    setPosts(response.data.items);
  }

  async function getDetailsPost(id: string | undefined) {
    const response = await api.get(
      `/repos/${username}/${repoName}/issues/${id}`
    );

    setDetailPost(response.data);
  }

  useEffect(() => {
    FetchGithubUser();
    getPosts();
  }, []);

  return (
    <GithubUserContext.Provider
      value={{ user, posts, detailsPost, getDetailsPost, FetchGithubUser }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
