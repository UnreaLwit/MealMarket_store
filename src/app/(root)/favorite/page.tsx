import { auth } from "@/auth";
import { redirect } from "next/navigation";
import FavPage from "@/components/Favorite/FavPage";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  return <FavPage />;
};

export default page;
