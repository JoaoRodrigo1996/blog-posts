import { ReactNode } from "react";
import { FooterContainer, Info } from "./styles";

interface FooterProps {
  icon: ReactNode;
  text: string;
}

export function Footer({ icon, text }: FooterProps) {
  return (
    <FooterContainer>
      <Info>
        {icon}
        <span>{text}</span>
      </Info>
    </FooterContainer>
  );
}
