import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import { ToggleTheme } from "./ToggleTheme";
import { Navmenu } from "./Navmenu";
import { NavSearch } from "./NavSearch";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="shadow-sm my-2 px-5 py-3 border rounded-lg">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image src="/ShopIcon.webp" alt="logo" width={50} height={50}></Image>
          <Link href="/">
            <span className="text-3xl">MealMarket</span>
          </Link>

          <ToggleTheme />
        </div>
        <NavSearch />
        <Navmenu />
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                className="block space-y-1 hover:bg-accent focus:bg-accent p-3 rounded-md hover:text-accent-foreground focus:text-accent-foreground no-underline leading-none transition-colors select-none outline-none"
                href="/favorite"
              >
                <MdFavorite size={20} />
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
