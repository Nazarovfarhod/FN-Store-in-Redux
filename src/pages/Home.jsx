//components
import Card from "../components/Card";

//redux
import { useSelector } from "react-redux";

function Home() {
  const { products } = useSelector((state) => state.product);
  // console.log(products);

  return (
    <div className="w-full mx-auto ml-20 flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold mb-20">
        Clothing Products
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {products?.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
