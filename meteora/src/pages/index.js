import { HomeScreen } from "@/screens/Home";
import { getProducts } from "@/libs/hygraphcms";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
}
export default HomeScreen;
