import { useEffect, useState } from "react";
import PRODUCTSRAW from "../data/products";
import { Search as IconSearch } from "react-feather";

export default function AppProduct() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    setProducts(() => PRODUCTSRAW);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handleSearchProduct(e) {
    let value = e.target.value;

    if (value != "" && value.length > 2) {
      const searchedProduct = PRODUCTSRAW.filter((element) => {
        return element.name.toLowerCase().includes(value.toLowerCase());
      });

      setProducts((products) => (products = searchedProduct));
    } else {
      setProducts((products) => (products = PRODUCTSRAW));
    }
  }

  function handleSortProduct(e) {
    let value = e.target.value;
    let clone = structuredClone(products);

    switch (value) {
      case "name-asc":
        clone.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        clone.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        clone.sort((a, b) =>
          a.price.text
            .toString()
            .localeCompare(b.price.text.toString(), undefined, {
              numeric: true,
            })
        );
        break;
      case "price-desc":
        clone.sort((a, b) =>
          b.price.text
            .toString()
            .localeCompare(a.price.text.toString(), undefined, {
              numeric: true,
            })
        );
        break;
      default:
        clone = PRODUCTSRAW;
        break;
    }

    setProducts(clone);
  }

  return (
    <section id="produk" className="pt-36">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:top-4">
            <details
              open={windowSize.innerWidth > 768}
              className="overflow-hidden rounded border border-gray-200"
            >
              <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                <span className="text-sm font-medium"> Toggle Filters </span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <form className="border-t border-gray-200 lg:border-t-0">
                <fieldset>
                  <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                    Kategori
                  </legend>
                  <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                      <input
                        id="1"
                        type="checkbox"
                        name="type[1]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="1" className="ml-3 text-sm font-medium">
                        Basic Skin Care
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="2"
                        type="checkbox"
                        name="type[2]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="2" className="ml-3 text-sm font-medium">
                        Sensitive Skin
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="3"
                        type="checkbox"
                        name="type[3]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="3" className="ml-3 text-sm font-medium">
                        Eye Cream
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="4"
                        type="checkbox"
                        name="type[4]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="4" className="ml-3 text-sm font-medium">
                        Body Care
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                  <button
                    name="reset"
                    type="button"
                    className="rounded text-xs font-medium text-gray-600 underline"
                  >
                    Reset Filter
                  </button>
                  <button
                    name="commit"
                    type="button"
                    className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white"
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="hidden sm:inline"> Menampilkan </span>
                {products.length} dari {products.length} Produk
              </p>
              <div className="ml-4 flex">
                <div>
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 pr-12 text-sm shadow-sm"
                    placeholder="Cari produk .."
                    onChange={(e) => handleSearchProduct(e)}
                  />
                </div>
                <div className="ml-3">
                  <select
                    className="rounded border-gray-100 text-sm"
                    onChange={(e) => handleSortProduct(e)}
                  >
                    <option readOnly="">Urutkan</option>
                    <option value="name-asc">Nama, A-Z</option>
                    <option value="name-desc">Nama, Z-A</option>
                    <option value="price-asc">Harga, Rendah-Tinggi</option>
                    <option value="price-desc">Harga, Tinggi-Rendah</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-1 border border-gray-200 bg-white-200 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => (
                <a
                  href="#"
                  className="block bg-white"
                  key={item.product_id + item.category.id}
                >
                  <img
                    alt={item.name}
                    src={item.primary_image.original}
                    className="h-56 w-full object-fill lg:h-72"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-red-400 px-3 py-1 text-xs font-medium">
                      {item.category.name}
                    </span>
                    <h3 className="mt-4 text-lg font-bold">{item.name}</h3>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                      {item.price.text_idr}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
