//redux
import { useSelector, useDispatch } from "react-redux";
//features
import {
  increamentAmount,
  decreamentAmount,
} from "../features/product/productSlice";

function Cart() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // Mahsulotlari borlarini filtrlab oling
  const filteredProducts = products?.filter((product) => product.amount > 0);

  return (
    <div>
      {!filteredProducts || filteredProducts.length === 0 ? (
        <h1 className="w-full text-center text-5xl font-bold mt-40">No Products🤷‍♂️</h1>
      ) : (
        <div className="w-[800px] mx-auto text-center">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="rounded-xl h-20 w-20">
                            <img src={product.imageUrl} alt={product.name} />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>{product.name}</td>
                    <td>
                      <button
                        onClick={() => dispatch(increamentAmount(product.id))}
                        className="mr-2 px-2 text-center border rounded-lg"
                      >
                        +
                      </button>
                      {product.amount}{" "}
                      <button
                        onClick={() => dispatch(decreamentAmount(product.id))}
                        className="ml-2 px-2 text-center border rounded-lg"
                      >
                        -
                      </button>
                    </td>
                    <td>${product.price}</td>
                    <td>${(product.amount * product.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
