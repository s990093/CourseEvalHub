"use client";
import { useState } from "react";
import Image from "next/image";
import { NavbarConfig } from "./../../../config/index";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* title */}
          <a
            href={NavbarConfig.navItemTitle.navItems.url}
            className="flex flex-row items-center justify-center"
          >
            <div className="mr-4">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div className=" font-bold">
              {NavbarConfig.navItemTitle.navItems.title}
            </div>
          </a>
        </div>

        <ul className="flex space-x-4 m-1">
          {NavbarConfig.navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className=" hover:text-gray-400 transition duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="搜索..."
              className="border border-gray-300 rounded px-2 py-1"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
