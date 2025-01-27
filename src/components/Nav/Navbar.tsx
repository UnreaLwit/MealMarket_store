import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import { ToggleTheme } from "../theme/ToggleTheme";
import { NavMenu } from "./NavMenu";
import { NavSearch } from "./NavSearch";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="shadow-sm mt-2 mb-8 px-5 py-3 border rounded-lg">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            className="drop-shadow-md"
            src="/ShopIcon.webp"
            alt="logo"
            width={50}
            height={50}
          ></Image>
          <Link href="/">
            <span className="drop-shadow-md text-3xl">MealMarket</span>
          </Link>

          <ToggleTheme />
        </div>
        <NavSearch />
        <NavMenu />
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                className="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md hover:text-accent-foreground focus:text-accent-foreground no-underline leading-none transition-colors select-none outline-none"
                href="/favorite"
              >
                <MdFavorite className="drop-shadow-md" size={20} />
              </Link>

              <span>{session?.user?.name}</span>

              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
              >
                <button className="flex items-center" type="submit">
                  Выйти <MdOutlineLogout size={20} />
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("google");
              }}
            >
              <button className="flex items-center" type="submit">
                Войти <MdOutlineLogin size={20} />
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
