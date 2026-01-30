export type Trip = {
  id: number;
  name: string;
  image: string;
  description: string;
  long_description: string;
  rating: number;
};

export type TripsResponse = {
  trips: Trip[];
};
