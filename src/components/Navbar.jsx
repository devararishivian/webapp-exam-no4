import { Navbar } from "flowbite-react";

export default function AppNavbar() {
  return (
    <Navbar className="fixed w-full z-20 top-0 left-0 bg-pink-800">
      <Navbar.Brand href="/" className="h-10 sm:h-12">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Nuni Beauty Care
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#beranda" className="text-stone-300">
          Beranda
        </Navbar.Link>
        <Navbar.Link href="#product" className="text-stone-300">
          Product
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
