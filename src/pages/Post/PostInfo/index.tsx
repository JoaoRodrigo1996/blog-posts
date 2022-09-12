import {
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Link,
} from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { GithubUserContext } from "../../../contexts/githubUserContext";
import {
  PostInfoContainer,
  HeaderContent,
  MainContent,
  FooterContainer,
} from "./styles";

export function PostInfo() {
  const { detailsPost, user } = useContext(GithubUserContext);

  return (
    <PostInfoContainer>
      <HeaderContent>
        <NavLink to="/">
          <CaretLeft />
          <span>VOLTAR</span>
        </NavLink>
        <NavLink to="https://www.github.com/JoaoRodrigo1996">
          <span>VER NO GITHUB</span>
          <Link size={18} weight="fill" />
        </NavLink>
      </HeaderContent>
      <MainContent>
        <h2>{detailsPost.title}</h2>
      </MainContent>
      <FooterContainer>
        <Footer
          icon={<GithubLogo size={18} weight="fill" />}
          text={user.login}
        />
        <Footer icon={<Calendar size={18} weight="fill" />} text={user.name} />
        <Footer
          icon={<ChatCircle size={18} weight="fill" />}
          text={String(user.followers)}
        />
      </FooterContainer>
    </PostInfoContainer>
  );
}
