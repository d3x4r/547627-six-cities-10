import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { City, OffersOption } from '../../const';

export const getSelectedCity = (state: State): City => state[NameSpace.Offers].selectedCity;
export const getOfferOption = (state: State): OffersOption => state[NameSpace.Offers].selectedOfferOption;
export const getHighlightedOffer = (state: State): number | null => state[NameSpace.Offers].highlightedOffer;
