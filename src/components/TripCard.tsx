import type { Trip } from "../types";
import "../styles/tripCard.scss";
import { TripImage } from ".";

type TripCardProps = {
  trip: Trip;
  onMoreInfo: (trip: Trip) => void;
};

export const TripCard = ({ trip, onMoreInfo }: TripCardProps) => {
  return (
    <article className="tripCard glass">
      <div className="tripCard__imageWrap">
        <TripImage
          className="tripCard__image"
          src={trip.image}
          alt={trip.name}
        />
      </div>

      <div className="tripCard__body">
        <div className="tripCard__header">
          <h2 className="tripCard__title">{trip.name}</h2>
          <div
            className="tripCard__rating"
            aria-label={`Rating ${trip.rating} out of 5`}
          >
            {"★".repeat(trip.rating)}
            {"☆".repeat(5 - trip.rating)}
          </div>
        </div>

        <p className="tripCard__description">{trip.description}</p>

        <div className="tripCard__actions">
          <button
            type="button"
            className="tripCard__button"
            onClick={() => {
              onMoreInfo(trip);
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </article>
  );
};

export default TripCard;
