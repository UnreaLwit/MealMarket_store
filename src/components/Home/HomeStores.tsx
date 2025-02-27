import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import stores from "../../data/storesData";

const HomeStores = () => {
  return (
    <div className="flex justify-center mb-8">
      {stores.map((store) => (
        <div key={store.id} className="m-2">
          <Card
            key={store.id}
            className="flex flex-col justify-between items-center shadow-lg w-auto h-auto"
          >
            <CardHeader>
              <img
                className="rounded-lg"
                src={store.src}
                alt={store.alt}
                width={150}
                height={150}
                loading="lazy"
              />
            </CardHeader>

            <CardContent className="flex justify-center items-center p-4 pt-0 text-center">
              <CardTitle>{store.title}</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription className="text-xl">
                Доставка за 20 минут
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HomeStores;
