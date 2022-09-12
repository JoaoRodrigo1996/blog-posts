import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { GithubUserContext } from "../../contexts/githubUserContext";
import { api } from "../../lib/axios";
import { PostInfo } from "./PostInfo";
import { PostContainer, PostContent, TextContent, CodeContent } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const { getDetailsPost, detailsPost } = useContext(GithubUserContext);

  const { id } = useParams();

  async function getDetailPostId() {
    await getDetailsPost(id);
  }

  useEffect(() => {
    getDetailPostId();
  }, []);

  return (
    <PostContainer>
      <Header />
      <PostInfo />

      <PostContent>
        <TextContent>
          <p>{detailsPost.body}</p>
          <Link to="#">Dynamic typing</Link>
          {/* <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p> */}
        </TextContent>
        {/* <CodeContent>
          <p>let foo = 42; // foo is now a number</p>
          <p>foo = bar; // foo is now a string</p>
          <p>foo = true; // foo is now a boolean</p>
        </CodeContent> */}
      </PostContent>
    </PostContainer>
  );
}
