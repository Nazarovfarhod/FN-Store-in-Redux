import { Link } from "react-router-dom";
import Logo from "../assets/fnLogo.png";
//react icons
import { IoHome } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { FaRegWindowMaximize } from "react-icons/fa";
//redux
import { useSelector, useDispatch } from "react-redux";

import { haveUser } from "../features/user/userSlice";
import { SlLogout } from "react-icons/sl";
//assets
import userImg from "../assets/user-img.png";

function Navbar() {
  const { TotalProduct, TotalPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex h-screen flex-col justify-between w-64 fixed top-0  border-e bg-slate-100">
        <div className="px-3 py-6">
          <span className="flex items-center p-1 mb-10 rounded-lg">
            <div>
              <img className="w-20" src={Logo} alt="" />
            </div>{" "}
            <span className="mr-10">
              <span className="text-2xl italic font-bold">S</span>
              <span className="font-medium">tore</span>
            </span>
            <span>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {TotalProduct}
                      </span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                  >
                    <div className="card-body">
                      <span className="text-lg font-bold ml-10">
                        {TotalProduct} Products
                      </span>
                      <span className="text-info ml-10">
                        Total Price: $ {TotalPrice}
                      </span>
                      <div className="card-actions">
                        <Link to="/cart" className="btn btn-primary btn-block">
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to="/"
                className="flex items-center gap-16 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                <IoHome /> Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="flex items-center gap-16  rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <FaRegWindowMaximize /> About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="flex items-center gap-16  rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <MdPermContactCalendar /> Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => dispatch(haveUser())}
                className="flex items-center gap-16 w-full bg-red-500  rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-red-400 hover:text-white"
              >
                <SlLogout /> Log Out
              </button>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src={userImg}
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Farxod Nazarov</strong>

                <span> nazarovfarhod002@gmail.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
