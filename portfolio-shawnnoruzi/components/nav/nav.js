import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
        <Link href="/">
        <ReactLogo />
        </Link>

          <div>
            <h1>
              <span>SHAWN</span>
              <span>NORUZI</span>
            </h1>
            <h2>FRONT END SOFTWARE ENGINEER</h2>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            About Me
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            Projects
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
