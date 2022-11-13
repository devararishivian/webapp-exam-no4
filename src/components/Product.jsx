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
    <section id="produk" className="pt-24 bg-gray-800 min-h-screen">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl text-white">
          Produk Nuni Beauty Care
        </h2>

        <p class="mt-4 text-gray-300">
          Temukan produk kecantikan terbaik hanya di Nuni Beauty Care. Produk
          kami sudah pasti asli dan memiliki sertifikasi BPOM.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-300">
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
            <div className="mt-4 grid grid-cols-1 gap-1 border-gray-200 bg-white-200 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((item) => (
                <a
                  href="#"
                  className="block bg-slate-300"
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
