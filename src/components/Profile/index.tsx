import { Buildings, GithubLogo, Link, Users } from "phosphor-react";
import { useContext } from "react";
import { GithubUserContext } from "../../contexts/githubUserContext";
import { Footer } from "../Footer";
import {
  ProfileContainer,
  Avatar,
  ProfileInfo,
  FooterContainer,
} from "./styles";

export function Profile() {
  const { user } = useContext(GithubUserContext);

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} />
      <ProfileInfo>
        <div>
          <h2>{user.name}</h2>
          <a href={`https://github.com/${user.login}`}>
            <span>GITHUB</span>
            <Link size={18} weight="fill" />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <FooterContainer>
          <Footer
            icon={<GithubLogo size={18} weight="fill" />}
            text={user.login}
          />
          <Footer
            icon={<Buildings size={18} weight="fill" />}
            text={user.name}
          />

          <Footer
            icon={<Users size={18} weight="fill" />}
            text={`${String(user.followers)} seguidores`}
          />
        </FooterContainer>
      </ProfileInfo>
    </ProfileContainer>
  );
}
