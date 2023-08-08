import {
  MobileNav,
  Navbar as TWNavbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

// ! Manage menu items according to login status

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link href="/users">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Users
        </Typography>
      </Link>
      <Link href="/subscriptions">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Subscriptions
        </Typography>
      </Link>
      {/* <Link href="#">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Logout
        </Typography>
      </Link> */}
      <Link href="/auth/signup">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Sign Up
        </Typography>
      </Link>
      <Link href="/auth/login">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          Log In
        </Typography>
      </Link>
    </ul>
  );

  return (
    <TWNavbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            Subscription App
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </TWNavbar>
  );
}
