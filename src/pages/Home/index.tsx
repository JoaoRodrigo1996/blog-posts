import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { GithubUserContext } from "../../contexts/githubUserContext";
import { api } from "../../lib/axios";
import { SearchForm } from "./components/SearchForm";
import {
  Divider,
  HomeContainer,
  PostContainer,
  PostContent,
  PostCard,
} from "./styles";

export function Home() {
  const { posts } = useContext(GithubUserContext);

  return (
    <HomeContainer>
      <Header />
      <Profile />

      <PostContainer>
        <Divider>
          <p>Publicações</p>
          <span>6 publicações</span>
        </Divider>
        <SearchForm />

        <PostContent>
          {posts.map((post) => {
            return (
              <PostCard key={post.number} href={`/post/${post.number}`}>
                <header>
                  <h2>{post.title}</h2>
                  <span>{post.created_at}</span>
                </header>
                <p>{post.body}</p>
              </PostCard>
            );
          })}
        </PostContent>
      </PostContainer>
    </HomeContainer>
  );
}
