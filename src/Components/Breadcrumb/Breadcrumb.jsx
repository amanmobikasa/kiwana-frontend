import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

function BreadcrumbComp() {


  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComp;