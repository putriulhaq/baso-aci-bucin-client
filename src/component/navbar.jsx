import { Link } from "react-router-dom";

function Navbar() {
  const style = {
    menu: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black",
  };

  console.log(style.home);
  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-custom-2b2a4c">
        <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className={style.menu} aria-current="page">
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#" className={style.menu}>
                  Branch
                </a>
              </li>
              <li className={style.menu}>
                <Link to="/team">Team</Link>
              </li>
              <li className={style.menu}>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
