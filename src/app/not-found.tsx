"use client";
import Link from "next/link";
import ButtonMotion from "@/components/Motion/ButtonMotion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-5xl text-center">Страница не найдена</h1>;
      <Link className="mx-auto" href="/">
        <ButtonMotion>
          <Button>На главную</Button>
        </ButtonMotion>
      </Link>
    </div>
  );
}
