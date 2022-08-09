import { offerProcess } from './offers-process';
import { initialState, selectCity, selectOfferOption, highlightCard } from './offers-process';
import { OffersOption, City } from '../../const';

describe('Reducer: offers-process', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should have a selected city', () => {
    expect(offerProcess.reducer(initialState, selectCity(City.Paris)))
      .toEqual({
        ...initialState,
        selectedCity: City.Paris
      });
  });

  it('should have a selected offer option', () => {
    expect(offerProcess.reducer(initialState, selectOfferOption(OffersOption.popular)))
      .toEqual({
        ...initialState,
        selectedOfferOption: OffersOption.popular
      });
  });

  it('should have a highlighted card', () => {
    expect(offerProcess.reducer(initialState, highlightCard(1212)))
      .toEqual({
        ...initialState,
        highlightedOffer: 1212,
      });
  });
});
