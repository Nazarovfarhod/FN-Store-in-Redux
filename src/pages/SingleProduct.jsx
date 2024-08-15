//rrd imports
import { Link, useParams } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//react icons
import { BsPlusSquareFill } from "react-icons/bs";
import { TbSquareMinusFilled } from "react-icons/tb";
//features
import {
  increamentAmount,
  decreamentAmount,
} from "../features/product/productSlice";

function SingleProduct() {
  const { id } = useParams();
  const { products, value } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div>
      {products?.map((prod) => {
        if (prod.id == id) {
          return (
            <div key={prod.id} className=" mx-auto">
              <article className="rounded-xl border-2 w-[1000px] ml-40 mt-40 mb-10 border-gray-100 bg-white">
                <div className="flex items-center gap-4 p-4 sm:p-6 lg:p-8">
                  <p className="block ">
                    <img
                      alt=""
                      src={prod.imageUrl}
                      className="size-20 rounded-lg object-cover"
                    />
                  </p>

                  <div>
                    <h2 className="font-medium sm:text-lg">{prod.name}</h2>
                    <p className="mb-5">( {prod.brand} )</p>

                    <p className="line-clamp-2 text-sm text-gray-700">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus, accusantium temporibus iure delectus ut totam
                      natus nesciunt ex? Ducimus, enim.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                    <Link to="/" className="text-[10px] font-medium sm:text-xs">
                      Back to Home
                    </Link>
                  </strong>
                </div>
              </article>

              <div className="w-full ml-48 mx-auto flex gap-4 ">
                <div className="flex items-center justify-center rounded mb-2 border border-gray-200">
                  {prod.amount ? (
                    <button
                      onClick={() => dispatch(decreamentAmount(prod.id))}
                      type="button"
                      className="size-10 flex justify-center items-center leading-10 transition hover:opacity-75"
                    >
                      <TbSquareMinusFilled className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(decreamentAmount(prod.id))}
                      disabled
                      type="button"
                      className="size-10 flex justify-center items-center leading-10 transition hover:opacity-75"
                    >
                      <TbSquareMinusFilled className="w-5 h-5" />
                    </button>
                  )}

                  <input
                    type="number"
                    id="Quantity"
                    value={prod.amount}
                    className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    onClick={() => dispatch(increamentAmount(prod.id))}
                    type="button"
                    className="size-10 flex items-center justify-center leading-10  transition hover:opacity-75"
                  >
                    <BsPlusSquareFill />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SingleProduct;
