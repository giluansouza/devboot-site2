import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center mt-8 mb-6 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Placa & Fipe</h1>
      <p className="text-center mb-8 text-zinc-600 text-lg font-semibold px-4">
        Mobile app developed with React Native for vehicle price search.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center mb-10 gap-6">
        <button className="flex-1 p-[3px] relative" disabled>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-zinc-800 hover:bg-transparent">
            Play Store
          </div>
        </button>

        <button className="flex-1 p-[3px] relative" disabled>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-zinc-800 hover:bg-transparent">
            Apple Store
          </div>
        </button>

        <button className="flex-1 p-[3px] relative" disabled>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-zinc-800 hover:bg-transparent">
            Expo Preview
          </div>
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <Image
          src={"/placa-fipe-1.jpeg"}
          alt="App placa e fipe"
          width={300}
          height={500}
          className="object-contain"
        />
        <Image
          src={"/placa-fipe-2.jpeg"}
          alt="App placa e fipe"
          width={300}
          height={500}
        />
        <Image
          src={"/placa-fipe-3.jpeg"}
          alt="App placa e fipe"
          width={300}
          height={500}
        />
      </div>
    </div>
  );
}
