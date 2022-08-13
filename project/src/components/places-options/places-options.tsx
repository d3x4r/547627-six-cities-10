import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { OffersOption } from '../../const';
import { selectOfferOption } from '../../store/offers-process/offers-process';
import { getOfferOption } from '../../store/offers-process/selectors';

const PlacesOptions = () => {
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const selectedOption = useAppSelector(getOfferOption);
  const dispatch = useAppDispatch();

  const handleFormSubmit = () => {
    setOptionsVisible((prev) => !prev);
  };

  const handleItemClick = (option: OffersOption) => {
    dispatch(selectOfferOption(option));
  };

  return (
    <form className="places__sorting" onClick={handleFormSubmit}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`${optionsVisible ? 'places__options--opened' : ''} places__options places__options--custom`}
      >
        {(Object.keys(OffersOption) as Array<keyof typeof OffersOption>).map((option) => (
          <li
            key={option}
            className={`${OffersOption[option] === selectedOption ? 'places__option--active' : ''} places__option`}
            tabIndex={0}
            onClick={() => handleItemClick(OffersOption[option])}
          >
            {OffersOption[option]}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default PlacesOptions;


