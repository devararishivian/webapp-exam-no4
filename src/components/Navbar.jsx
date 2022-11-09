import { Navbar } from "flowbite-react";

export default function AppNavbar() {
  return (
    <Navbar fluid={false} rounded={true}>
      <Navbar.Brand href="/" className="h-10 sm:h-12">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Nuni Beauty Care
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Beranda
        </Navbar.Link>
        <Navbar.Link href="#product">Product</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
