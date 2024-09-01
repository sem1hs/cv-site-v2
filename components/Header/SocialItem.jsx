import Link from "next/link";
import React from "react";

const SocialItem = ({ info }) => {
  return (
    <li>
      <Link href={info.href} target="_blank">
        {info.icon}
      </Link>
    </li>
  );
};

export default SocialItem;
