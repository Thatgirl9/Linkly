import { useState } from "react";
import Icon from "../assets/Group 18.png";
import SignIn from "../assets/sign-in.png";
import { Link } from "react-router-dom";
// import { ionicon } from "@ionic/react";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Features", link: "#features", newtab: false },
    { name: "Pricing", link: "#pricing", newtab: false },
  ];

  return (
    <header
      className={`bg-primaryBlack w-full md:px-14 px-6 py-5 lg:py-6 fixed z-50  
    `}
    >
      {/* second header */}
      <nav className="lg:flex lg:justify-between lg:items-center">
        {/* Logo Hamburger */}
        <div className="flex items-center justify-between">
          <img src={Icon} className="h-[46px]" />

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="w-6 h-6 text-4xl text-textPrimary lg:hidden bg-transparent border-none"
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="text-textPrimary"
            ></ion-icon>
          </button>
        </div>

        {/* Links */}

        <div
          className={`links h-0 overflow-y-hidden transition-all lg:h-auto bg-primaryGrey lg:bg-transparent absolute top-[4em] right-0 lg:relative lg:top-0 lg:right-0 lg:border-none  lg:rounded-none duration-150 ease-in-out z-50 nav__div 
          ${open ? "h-[100vh] md:w-[50%] w-[60%] overflow-y-auto" : "h-0 "}`}
        >
          <ul className="flex lg:flex-row lg:gap-6 text-white font-inter font-normal gap-[1.4em] justify-end lg:justify-normal lg:items-center items-end flex-col  px-5 py-8  lg:mx-0 lg:p-0  border-surfaceSecondary lg:border-none list-none border-red-500 border ">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="text-white hover:text-primaryLite font-semibold transition-all ease-in-out no-underline"
                  {...(link.newtab
                    ? { target: "_blank" }
                    : { target: "_self" })}
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <button className="rounded-3xl  bg-primaryGrey login-btn shadow-sm hover:text-primaryLite">
              <Link
                to="/loginpage"
                className="flex gap-[0.4em] items-center justify-center  py-2 px-3 text-white font-semibold transition-all ease-in-out no-underline text-sm hover:text-primaryLite"
              >
                <span>Login</span>
                <img src={SignIn} className="w-[1.4em] h-[1em]" />
              </Link>
            </button>
            <button className="bg-primaryBlue py-2 px-5 rounded-3xl border-transparent hover:text-primaryLite hover:cursor-pointer">
              <Link
                to="/register"
                className="text-white font-semibold transition-all ease-in-out no-underline text-sm hover:text-primaryLite"
              >
                Register Now
              </Link>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
