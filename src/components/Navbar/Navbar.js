import React, { useEffect, useRef } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/navbar.css';

import ListItem from './ListItem';
import { catagorys } from '../../blogDB';

function Navbar() {
  const navSearchRef = useRef();
  const navbarRef = useRef();
  const navToggleRef = useRef();

  const navItems = [
    {
      name: 'Start page',
      href: '/',
    },
    {
      name: 'Blog articles',
      dropdown: [
        ...catagorys,
        {
          name: 'Blog posts',
          slug: '/catagory/all',
        },
      ],
    },
    {
      name: 'About me',
      href: '/about-me',
    },
    {
      name: 'My Projects',
      href: 'https://sourov-ch-portfolio.netlify.app/portfolio',
    },
  ];

  const submitTrigClickHandler = (e) => {
    const { current: navSearch } = navSearchRef;

    navSearch.classList.contains('active')
      ? navSearch.classList.remove('active')
      : (() => {
          navSearch.classList.add('active');
          navSearch.nav_search_inp.focus();
        })();
  };

  const refs = () => {
    const { current: navbar } = navbarRef;
    const { current: navToggle } = navToggleRef;

    const isNavToggleActive = navToggle.classList.contains('active');
    const isNavBarActive = navbar.classList.contains('active');

    return { navbar, navToggle, isNavBarActive, isNavToggleActive };
  };

  const navToggleHandler = (e) => {
    const { navbar, navToggle } = refs();

    document.body.classList.toggle('no_scroll');
    navToggle.classList.toggle('active');
    navbar.classList.toggle('active');
  };

  useEffect(() => {
    const { navbar, navToggle, isNavBarActive, isNavToggleActive } =
      refs();

    if (isNavBarActive || isNavToggleActive) {
      navToggle.classList.add('active');
      navbar.classList.add('active');
      document.body.classList.add('no_scroll');
    } else {
      document.body.classList.remove('no_scroll');
    }
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navsec_1_bg">
        <div className="container">
          <div className="navsec_1">
            <img
              src={`${process.env.PUBLIC_URL}/resorces/img/logo_main.png`}
              alt="blog logo"
              className="logo"
            />
            <span className="nav_ad">
              <ReactMarkdown children="*“Modern Javascript”* book is available!" />
              <a href="/go" className="nav_ad_link">
                Checkout
              </a>
            </span>
            <div className="nav_right">
              <form
                className="nav_search"
                ref={navSearchRef}
                autoComplete="off"
              >
                <input
                  type="text"
                  name="nav_search_inp"
                  id="nav_search_inp"
                  placeholder="eg: js events"
                />
                <button type="submit" title="Submit">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>
              <button
                className="search_triggar"
                onClick={submitTrigClickHandler}
                title="Search"
                type="button"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button
                className="nav_toggle"
                ref={navToggleRef}
                onClick={navToggleHandler}
              >
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="navsec_2">
          <ul className="nav_list">
            {navItems.map(({ name, href, dropdown }, index) => (
              <ListItem
                name={name}
                href={href}
                dropdown={dropdown}
                navToggleHandler={navToggleHandler}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
