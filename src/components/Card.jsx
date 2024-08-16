//rrd imports
import { Link } from "react-router-dom";
//features
import { AddToAmount } from "../features/product/productSlice";
// redux
import { useDispatch } from "react-redux";

function Card({ product }) {
  const dispatch = useDispatch();
  return (
    <div
      href="#"
      className="relative block rounded-tr-3xl w-72 border border-gray-100"
    >
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        Sale {product.discount}%
      </span>

      <img
        src={product.imageUrl}
        alt=""
        className="-ml-6 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300 object-cover"
      />

      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">
          {" "}
          {product.name}
        </strong>

        <p className="mt-2 text-pretty text-gray-700">{product.brand}</p>

        <Link
          onClick={() => dispatch(AddToAmount(product.id))}
          to={`/singleProduct/${product.id}`}
          className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Card;
