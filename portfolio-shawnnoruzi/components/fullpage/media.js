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
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Lettering
            title="Hi, I'm Shawn."
            text={[
              "I'm a 2 year seasoned Front End Developer and UX/UI specialist in Canada with a Mathematics and Computer Science educational background. I work with clients all around the world, contributing to open source projects, spear heading start ups and maintaining projects in the local tech scene. My main objective is to bring my expertise of high end and modern web design together with my client's needs to create purposeful branding and a product that truly stands out. ","-",
           "Lets Work Together." ]}
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
    <Section wrapper={false} backgroundColor="#ff6f5e">
      <Background src="https://caferati.me/images/series/bojack-0.png" />
      <Content
        main={
          <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
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
              Goto the prev page
            </AwesomeButton>
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
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <Lettering
                title="PAGE-TWO"
                text={[
                  "This is multiple section page, scroll down to view more content."
                ]}
              />
            }
            action={<Mouse />}
          />
        </Section>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <Lettering
                title="PAGE-TWO"
                text={[
                  "This is multiple section page, scroll down to view more content."
                ]}
              />
            }
            action={<Mouse />}
          />
        </Section>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <Lettering
                title="PAGE-TWO"
                text={[
                  "This is multiple section page, scroll down to view more content."
                ]}
              />
            }
            action={<Mouse />}
          />
        </Section>
      </Page>
    )
  },
  {
    slug: "page-three",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-three",
    children: <Third />
  }
];
