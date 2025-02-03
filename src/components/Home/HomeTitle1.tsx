"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ButtonMotion from "../Motion/ButtonMotion";

const HomeTitle1 = () => {
  return (
    <div className="items-center grid grid-cols-[1fr_auto_1fr] mr-2 mb-8">
      <div></div>
      <div className="justify-self-center">
        <h1 className="text-4xl">Популярные товары</h1>
      </div>
      <div className="justify-self-end">
        <ButtonMotion>
          <Link className="flex items-center text-xl" href="/shop">
            Магазин
            <FaArrowRight className="ml-2" />
          </Link>
        </ButtonMotion>
      </div>
    </div>
  );
};

export default HomeTitle1;
