import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    title: "Мясные продукты",
    src: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png",
    alt: "Мясные продукты",
  },
  {
    title: "Молочные продукты",
    src: "https://cdn-icons-png.flaticon.com/512/7295/7295435.png",
    alt: "Молочные продукты",
  },
  {
    title: "Консервы",
    src: "https://cdn-icons-png.flaticon.com/512/5987/5987631.png",
    alt: "Консервы",
  },
  {
    title: "Овощи",
    src: "https://cdn-icons-png.flaticon.com/512/4888/4888029.png",
    alt: "Овощи",
  },
  {
    title: "Фрукты",
    src: "https://cdn-icons-png.flaticon.com/512/2843/2843584.png",
    alt: "Фрукты",
  },
];

const HomeCategory = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((product, i) => (
        <div key={i}>
          <Card
            key={i}
            className="flex justify-between items-center shadow-lg mx-4 mb-8 w-[200px] h-[100px]"
          >
            <CardHeader className="pt-2 pl-2 w-1/2 place-self-start">
              <CardTitle className="text-xl">{product.title}</CardTitle>
            </CardHeader>

            <CardFooter className="pr-2 pb-2 place-self-end">
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
