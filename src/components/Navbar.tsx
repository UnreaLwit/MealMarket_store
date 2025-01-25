import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import { ToggleTheme } from "./ToggleTheme";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="shadow-sm px-5 py-3">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="globe.svg" alt="logo" width={50} height={50}></Image>
        </Link>

        <ToggleTheme />

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="dark:text-white">Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("google");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
