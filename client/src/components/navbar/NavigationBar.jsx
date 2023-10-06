import React from "react";
import Logo from '../../assets/image/logotiket.png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
         <img src={Logo} className="w-[130px]"/>
        </Typography>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" className="bg-blue-gray-50 text-black">
            <a href="/login">Login</a>
          </Button>
          <Button variant="text" size="sm" className=" text-blue-700 bg-blue-gray-50">
            <a href="/register">Daftar</a>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <Button variant="text" size="sm" fullWidth className="mb-2 bg-blue-gray-50 text-blue-gray-500">
            <span>Login</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Daftar</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;
