import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/ResidentCard.css";
import Loader from "./Loader";

const ResidentCard = ({ url }) => {
  const [residents, getResident, hasError, isLoading] = useFetch(url);

  useEffect(() => {
    getResident();
  }, []);

  return (
    <article className="resident">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="resident__header">
            <img
              className="resident__image"
              src={residents?.image}
              alt={residents?.name}
            />
            <div className="resident__status-container flex-container">
              <div
                className={`resident__status-circle ${residents?.status}`}
              ></div>
              <div className="resident__status">{residents?.status}</div>
            </div>
          </header>
          <section className="resident_body">
            <h3 className="resident__name">{residents?.name}</h3>
            <hr className="resident__hr" />
            <ul className="resident__list grid-container">
              <li className="resident__item grid-container">
                <span className="resident__label">Specie:</span>
                <span className="resident__value">{residents?.species}</span>
              </li>
              <li className="resident__item grid-container">
                <span className="resident__label">Origin:</span>
                <span className="resident__value">
                  {residents?.origin.name}
                </span>
              </li>
              <li className="resident__item grid-container">
                <span className="resident__label">Episodes where appear:</span>
                <span className="resident__value">
                  {residents?.episode.length}
                </span>
              </li>
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default ResidentCard;
