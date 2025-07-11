// pages/index.tsx
import { PROPERTYLISTINGSAMPLE } from "./../constants";
import { PropertyProps } from "./../interfaces";
import Image from "next/image";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Pet Friendly",
  "Mountain View",
];

const Pill = ({ label }: { label: string }) => (
  <button className="px-4 py-1 bg-gray-200 rounded-full text-sm hover:bg-indigo-100 transition">
    {label}
  </button>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[60vh] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?vacation,travel')" }}>
        <h1 className="text-3xl md:text-5xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap gap-3 justify-center my-8">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-12">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-gray-600 text-sm">
                {property.address.city}, {property.address.country}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-semibold">${property.price}</span>
                <span className="text-sm text-yellow-600">⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;

