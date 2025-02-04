"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FiShoppingCart } from "react-icons/fi";
import { cn } from "@/lib/utils";
import * as React from "react";
import Link from "next/link";
import ButtonMotion from "../Motion/ButtonMotion";

const NavMenu = () => {
  return (
    <NavigationMenu className="z-0 m-2">
      <NavigationMenuList>
        <ButtonMotion>
          <NavigationMenuItem className="shadow-md mr-6 border rounded-lg">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Главная
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </ButtonMotion>
        <ButtonMotion>
          <NavigationMenuItem className="shadow-md !mr-6 border rounded-lg">
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Магазин
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </ButtonMotion>
        <ButtonMotion>
          <NavigationMenuItem className="shadow-md border rounded-lg">
            <Link href="/cart" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Корзина
                <FiShoppingCart />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </ButtonMotion>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-medium text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
