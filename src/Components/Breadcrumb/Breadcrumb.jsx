import { Breadcrumb } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function  BreadcrumbComp({}) {

  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <NavLink to={"/"}><Breadcrumb.Item href="#">
        Home
      </Breadcrumb.Item></NavLink>
      <Breadcrumb.Item >My account</Breadcrumb.Item>
      
    </Breadcrumb>
  );
}

export default BreadcrumbComp;