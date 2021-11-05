import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Desenvolvido por Pedro</FooterTitle>
          <Typography variant={"body2"} sx={{ marginTop: 2 }}>
            Site desenvolvido para fins de estudo e desenvolvimento nas
            tecnologias utilizadas, através do workshop Multi-Stack Front-End da
            TreinaWeb.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Conheça meus links</FooterTitle>
          <AppList>
            <li>
              <a
                href={"https://github.com/pedrohbs00"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  alt="GitHub"
                />
              </a>
            </li>
            <li>
              <a
                href={"https://www.linkedin.com/in/pedrohbs/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img
                  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="LinkedIn"
                />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
