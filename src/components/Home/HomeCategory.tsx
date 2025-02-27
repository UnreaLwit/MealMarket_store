import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import categories from "../../data/categoriesData";

const HomeCategory = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((product, i) => (
        <div key={i}>
          <Card
            key={i}
            className="flex justify-between items-center shadow-lg mx-4 mb-8 w-[200px] h-[100px]"
          >
            <CardHeader className="place-self-start pt-2 pl-2 w-1/2">
              <CardTitle className="text-xl">{product.title}</CardTitle>
            </CardHeader>

            <CardFooter className="place-self-end pr-2 pb-2">
              <img
                className="rounded-lg"
                src={product.src}
                alt={product.alt}
                width={70}
                height={70}
                loading="lazy"
              />
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HomeCategory;
