"use client";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import React from "react";
import ButtonMotion from "../Motion/ButtonMotion";

const NavFavoriteButton = () => {
  return (
    <ButtonMotion>
      <Link
        className="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md hover:text-accent-foreground focus:text-accent-foreground no-underline leading-none transition-colors select-none outline-none"
        href="/favorite"
      >
        <MdFavorite className="drop-shadow-md text-red-500" size={20} />
      </Link>
    </ButtonMotion>
  );
};

export default NavFavoriteButton;
