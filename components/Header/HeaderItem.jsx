import Link from "next/link";
import React from "react";

const HeaderItem = ({ info }) => {
  return (
    <li>
      <Link href={info.href}>
        <span className="text-gray-300 font-bold text-xs md:text-sm hover:text-purple-800 transition-all">
          {info.title}
        </span>
      </Link>
    </li>
  );
};

export default HeaderItem;
