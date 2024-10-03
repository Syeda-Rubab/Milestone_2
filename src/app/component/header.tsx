import React from "react";
import Link from "next/link"

const Header = () => {
    return (
      <div className="border-b border-gray-200 py-2">
          <div className="container sm:flex justify-around items-center">
              <div className="font-bold text-3xl text-center pb-4 sm:pb-0 text-gray-600 font-serif flex pl-10">
                  La Lavendar
              </div>
              <div className="flex w-fit gap-10 mx-auto font-medium py-4">
                <Link className="hover:underline hover:decoration-pink-300 navbar__link relative flex pl-96 fixed left-56 text-gray-400 font-style: italic " href="#">
                  Home
                </Link>
                <Link className="hover:underline hover:decoration-pink-300 navbar__link relative fixed left-56 text-gray-400 font-style: italic" href="#">
                  About us
                </Link>
                <Link className="hover:underline hover:decoration-pink-300 navbar__link relative fixed left-56 text-gray-400 font-style: italic" href="#">
                  Contact
                </Link>
                
            </div>
  </div>
  </div>
    )
}
export default Header;