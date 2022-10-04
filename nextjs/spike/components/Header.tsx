import Link from 'next/link';
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={"text-gray-600 body-font"}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Bocoup</span>
          </>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/services" className="mr-5 hover:text-gray-900">
            Services
          </Link>
          <Link href="/recent-work" className="mr-5 hover:text-gray-900">
            Recent Work
          </Link>
          <Link href="/blogs" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <div className="mr-5 hover:text-gray-900"></div>
          <div className={styles.dropdown}>
            <div className="mr-5 hover:text-gray-900">
              <button className="dropbtn">
                About Us
                <i className="fa fa-caret-down"></i>
              </button>
            </div>
            <div className={styles.dropdownContent}>
              <Link href="/our-team">Our Team</Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <form className="mb-0 hidden lg:flex">
            <div className="relative">
              <input
                className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                placeholder="Search..."
                type="text"
              />

              <button
                className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                type="submit"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <Link href="/contact-us">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};
