import { auth } from "@/auth";
import FavPage from "@/components/Favorite/FavPage";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <>
      <FavPage />
    </>
  );
};

export default page;
