export default function AppHero() {
  return (
    <section className="flex h-screen text-gray-400 bg-gray-900">
      <div className="container mx-auto flex md:flex-row flex-col m-auto items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Mulai cantikmu hari ini
          </h1>
          <p className="mb-8 w-3/4 leading-relaxed">
            Temukan produk kecantikan terbaik hanya di Nuni Beauty Care. Produk
            kami sudah pasti asli dan memiliki sertifikasi BPOM.
          </p>
          <div className="flex justify-center mt-3">
            <button className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg">
              Belanja Sekarang
            </button>
          </div>
        </div>
        <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
