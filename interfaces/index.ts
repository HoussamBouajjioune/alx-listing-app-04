// interfaces/index.ts
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}


export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  location: string;
  description: string;
  amenities: string[];
}

export interface Review {
  id: number;
  comment: string;
  rating: number;
  user: {
    name: string;
  };
}
