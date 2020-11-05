import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import Project from "../project/project";
import "./fullpage.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const projects = {
  gitpay: {
    site: 'https://gitpay.me/#/',
    git: 'https://github.com/worknenjoy/gitpay',
    title: "GitPay",
    description:
      "Collaborate, learn and receive payments by solving issues from projects",
  },
  placespeak: {
    site: 'https://www.placespeak.com/en/#/',
    git: 'https://github.com/PlaceSpeak',
    title: "PlaceSpeak",
    description:
      "PlaceSpeak is a location-based community consultation platform. Claim your place. Speak your mind. Influence the outcome.",
  },
  openmentor: {
    site: 'https://angel.co/company/openmentorship/people',
    git: 'https://github.com/nikhil-g777/openmentorship',
    title: "OpenMentorship",
    description:
      "Find the Mentor you always wanted on this Tinder-Like mentor finding app.",
  },
};

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Lettering
            title="Hi, I'm Shawn."
            text={[
              "I'm a 2 year seasoned Front End Developer and UX/UI specialist in Canada with a Mathematics and Computer Science educational background. I work with clients all around the world, contributing to open source projects, spear heading start ups and maintaining projects in the local tech scene. My main objective is to bring my expertise of high end and modern web design together with my client's needs to create purposeful branding and a product that truly stands out.",

              "Lets Work Together.",
            ]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              See My Work
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#580DBE">
      <Content
        main={
          <div>
            <Lettering
              title="Get In Touch"
              SecondPage={true}
              text={[
                "Have an employment opportunity for me?",
                "Want a quote for a custom built website?",
                "Just want to chat?",
                "Message me using the contact options below. :)",
              ]}
            />
            <div
              style={{
                margin: "0 auto",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <a
                style={{ margin: "20px" }}
                href="mailto:Shawn.Noruzi@gmail.com"
              >
                <MailOutlineIcon style={{ fill: "black" }} fontSize="large" />
              </a>
              <a
                style={{ margin: "20px" }}
                href="tel:604-704-5402"
              >
                <PhoneIcon style={{ fill: "black" }} fontSize="large" />
              </a>
              <a
                style={{ margin: "20px" }}
                href="https://www.linkedin.com/in/shawn-noruzi/"
              >
                <LinkedInIcon style={{ fill: "black" }} fontSize="large" />
              </a>
              <a
                style={{ margin: "20px" }}
                href="https://github.com/Shawn-Noruzi"
              >
                <GitHubIcon style={{ fill: "black" }} fontSize="large" />
              </a>
            </div>
          </div>
        }
        action={
          <div className="button">
            <a href="/static/ShayanNoruziResume.docx" download>
              <AwesomeButton style={{fontSize:"12px"}} size="large">Download my Resume</AwesomeButton>
            </a>
          </div>
        }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />,
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <div>
                <Lettering
                  title="Projects"
                  text={[
                    "Below is a list of my previous projects and work experience.",
                    " ",
                    "Check out my Github Page for more!",
                  ]}
                  SecondPage={true}
                />
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                  href="https://github.com/Shawn-Noruzi"
                >
                  <GitHubIcon style={{ fill: "black" }} fontSize="large" />
                </a>
              </div>
            }
            action={<Mouse />}
          />
        </Section>
        <Section wrapper={false} backgroundColor="#3B6AA0">
          <Project
            src="/static/images/git.png"
            title={projects.gitpay.title}
            description={projects.gitpay.description}
            site={projects.gitpay.site}
            git={projects.gitpay.git}
          />
        </Section>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Project
            src="/static/images/place.PNG"
            title={projects.placespeak.title}
            description={projects.placespeak.description}
            site={projects.placespeak.site}
            git={projects.placespeak.git}
          />
        </Section>
        <Section wrapper={false} backgroundColor="#3B6AA0">
          <Project
            src="/static/images/open.PNG"
            phone={true}
            title={projects.openmentor.title}
            description={projects.openmentor.description}
            site={projects.openmentor.site}
            git={projects.openmentor.git}
          />
        </Section>
      </Page>
    ),
  },
  {
    slug: "page-three",

    className: "slide page-three",
    children: <Third />,
  },
];
