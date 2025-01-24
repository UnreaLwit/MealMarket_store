const {push} = useRouter(); // push и replace
const pathname = usePathname(); // показывает текущий путь

const params = useParams<{ slug: string }>(); // для использования слагов в url
params.slug;

const fetchData = async () => {
try {
const response = await fetch("https://fakestoreapi.com/products?limit=12");
if (!response.ok) {
throw new Error(`Failed to fetch products: ${response.status}`);
}
const data = await response.json();
return data;
} catch (error) {
console.error("Error fetching products:", error);
return null; // Indicate error or handle it differently if needed
}
};
if (!data) redirect("/404");
