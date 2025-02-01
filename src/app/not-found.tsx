import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-5xl text-center">Страница не найдена</h1>;
      <Link className="mx-auto" href="/">
        <Button>На главную</Button>
      </Link>
    </div>
  );
}
