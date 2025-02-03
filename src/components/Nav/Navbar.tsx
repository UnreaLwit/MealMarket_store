import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { ToggleTheme } from "../theme/ToggleTheme";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";
import NavFavoriteButton from "./NavFavoriteButton";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="shadow-sm mt-2 mb-8 px-5 py-3 border rounded-lg">
      <nav className="flex flex-wrap xl:flex-nowrap justify-between items-center">
        <div className="flex items-center gap-5 m-2">
          <div className="flex items-center">
            <Image
              className="drop-shadow-md"
              src="/ShopIcon.webp"
              alt="logo"
              width={50}
              height={50}
            />
            <Link href="/">
              <span className="drop-shadow-md ml-2 text-3xl">MealMarket</span>
            </Link>
          </div>
          <ToggleTheme />
        </div>
        <NavSearch />
        <NavMenu />
        <div className="flex items-center gap-5 m-2">
          {session && session?.user ? (
            <>
              <NavFavoriteButton />

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
