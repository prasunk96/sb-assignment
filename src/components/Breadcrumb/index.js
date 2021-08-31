import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({
    linkList
}) => (
    <nav>
    <div class="nav-wrapper">
      <div class="col s12">
        {linkList && linkList.map(item => <Link key={item.name} to={item.link} class="breadcrumb">{item.name}</Link>)}
      </div>
    </div>
  </nav>
);

export default Breadcrumb;
