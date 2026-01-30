import type { Trip } from "../types";
import "../styles/tripDetails.scss";
import TripImage from "./TripImage";

type TripDetailsProps = {
  trip: Trip;
};

export const TripDetails = ({ trip }: TripDetailsProps) => {
  return (
    <div className="tripDetails">
      <TripImage
        className="tripDetails__image"
        src={trip.image}
        alt={trip.name}
      />

      <div className="tripDetails__meta">
        <span className="tripDetails__label">Rating</span>
        <span className="tripDetails__value">{trip.rating} / 5</span>
      </div>

      <p className="tripDetails__description">{trip.long_description}</p>
    </div>
  );
};

export default TripDetails;
