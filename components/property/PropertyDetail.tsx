import { Property } from "@/interfaces";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <img src={property.image} alt={property.title} className="w-full h-80 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-700 mb-4">{property.description}</p>
      <p className="text-xl font-semibold text-blue-600 mb-2">${property.price} / night</p>
      <p className="text-gray-600">Location: {property.location}</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {property.amenities.map((amenity: string, index: number) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
