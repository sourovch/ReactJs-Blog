import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function ListItem({ name, href, dropdown, navToggleHandler }) {
  const navLinkRef = useRef();

  const ddClickHandler = (e) => {
    const { current: navLink } = navLinkRef;

    if (navLink.classList.contains('dd_link'))
      navLink.classList.toggle('active');
  };

  return (
    <li className="nav_item">
      {dropdown ? (
        <span
          className="nav_link dd_link"
          ref={navLinkRef}
          onClick={ddClickHandler}
        >
          {name}
          <ul className="dropdown">
            {dropdown.map(({ name, slug }, index) => (
              <li key={index}>
                <NavLink to={slug}>{name}</NavLink>
              </li>
            ))}
          </ul>
          <span className="indicator">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </span>
      ) : (
        <NavLink
          to={href}
          className="nav_link"
          onClick={navToggleHandler}
        >
          {name}
        </NavLink>
      )}
    </li>
  );
}

export default ListItem;
