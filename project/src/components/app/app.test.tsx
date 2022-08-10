import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, AppRoute, City, OffersOption } from '../../const';
import App from './app';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const DEFAULT_CITY = City.Paris;
const DEFAULT_OFFER_OPTION = OffersOption.popular;
const history = createMemoryHistory();

const initialStoreData = {
  USER: { authorizationStatus: AuthorizationStatus.NoAuth },
  DATA: {
    currentOffer: null,
    allOffers: [],
    comments: null,
    nearPlaces: null,
    favorites: [],
    loadedState: {
      isOffersLoaded: false,
      isCurrentOfferLoaded: false,
      isReviewFormSubmited: false,
    },
  },
  OFFERS: {
    selectedCity: DEFAULT_CITY,
    highlightedOffer: null,
    selectedOfferOption: DEFAULT_OFFER_OPTION,
  },
};

describe('Application Routing', () => {
  it('should render "Main page" with first active city - "Paris" when user navigate to "/"', () => {
    const store = mockStore(initialStoreData);
    history.push(AppRoute.Root);

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    render(fakeApp);

    expect(screen.getByText(/in Paris/i)).toBeInTheDocument();
  });

  it('should render "Login page" when user navigate to "/login"', () => {
    const store = mockStore(initialStoreData);
    history.push(AppRoute.Login);

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );
    render(fakeApp);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('should render "Room page" when user navigate to "/offer/:id"', async () => {
    history.push('/offer/1');
    const store = mockStore({
      ...initialStoreData,
      DATA: {
        ...initialStoreData.DATA,
        currentOffer: {
          city: {
            name: 'Dusseldorf',
            location: {
              latitude: 51.225402,
              longitude: 6.776314,
              zoom: 13
            }
          },
          previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
          images: [
            'https://10.react.pages.academy/static/hotel/8.jpg',
            'https://10.react.pages.academy/static/hotel/6.jpg',
            'https://10.react.pages.academy/static/hotel/5.jpg',
            'https://10.react.pages.academy/static/hotel/14.jpg',
            'https://10.react.pages.academy/static/hotel/1.jpg',
            'https://10.react.pages.academy/static/hotel/4.jpg',
            'https://10.react.pages.academy/static/hotel/7.jpg',
            'https://10.react.pages.academy/static/hotel/12.jpg',
            'https://10.react.pages.academy/static/hotel/13.jpg',
            'https://10.react.pages.academy/static/hotel/10.jpg',
            'https://10.react.pages.academy/static/hotel/3.jpg',
            'https://10.react.pages.academy/static/hotel/20.jpg',
            'https://10.react.pages.academy/static/hotel/15.jpg',
            'https://10.react.pages.academy/static/hotel/19.jpg'
          ],
          title: 'Penthouse, 4-5 rooms + 5 balconies',
          isFavorite: false,
          isPremium: false,
          rating: 4.1,
          type: 'hotel',
          bedrooms: 2,
          maxAdults: 5,
          price: 393,
          goods: [
            'Laptop friendly workspace',
            'Washer',
            'Breakfast',
            'Air conditioning'
          ],
          host: {
            id: 25,
            name: 'Angelina',
            isPro: true,
            avatarUrl: 'img/avatar-angelina.jpg'
          },
          description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
          location: {
            latitude: 51.210402,
            longitude: 6.798314,
            zoom: 16
          },
          id: 1,
        },
      },
    });
    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );
    render(fakeApp);

    expect(screen.getByText('Penthouse, 4-5 rooms + 5 balconies')).toBeInTheDocument();
    expect(screen.getByTestId('room-page-title')).toBeInTheDocument();
  });

  it('should render "Favorite page" when user navigate to "/favorites"', async () => {
    history.push('/favorites');
    const store = mockStore({
      ...initialStoreData,
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: {
        ...initialStoreData.DATA,
        favorites: [
          {
            city: {
              name: 'Paris',
              location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
              }
            },
            previewImage: 'https://10.react.pages.academy/static/hotel/19.jpg',
            images: [
              'https://10.react.pages.academy/static/hotel/3.jpg',
              'https://10.react.pages.academy/static/hotel/2.jpg',
              'https://10.react.pages.academy/static/hotel/15.jpg',
              'https://10.react.pages.academy/static/hotel/20.jpg',
              'https://10.react.pages.academy/static/hotel/9.jpg',
              'https://10.react.pages.academy/static/hotel/10.jpg',
              'https://10.react.pages.academy/static/hotel/13.jpg',
              'https://10.react.pages.academy/static/hotel/18.jpg',
              'https://10.react.pages.academy/static/hotel/7.jpg',
              'https://10.react.pages.academy/static/hotel/8.jpg',
              'https://10.react.pages.academy/static/hotel/16.jpg',
              'https://10.react.pages.academy/static/hotel/6.jpg',
              'https://10.react.pages.academy/static/hotel/11.jpg',
              'https://10.react.pages.academy/static/hotel/4.jpg'
            ],
            title: 'Nice, cozy, warm big bed apartment',
            isFavorite: true,
            isPremium: false,
            rating: 3.3,
            type: 'house',
            bedrooms: 2,
            maxAdults: 3,
            price: 654,
            goods: [
              'Breakfast',
              'Laptop friendly workspace'
            ],
            host: {
              id: 25,
              name: 'Angelina',
              isPro: true,
              avatarUrl: 'img/avatar-angelina.jpg'
            },
            description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
            location: {
              latitude: 48.843610000000005,
              longitude: 2.338499,
              zoom: 16
            },
            id: 2
          }
        ],
      },
    });
    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );
    render(fakeApp);


    expect(screen.getByTestId('favorites-page-title')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    const store = mockStore({
      ...initialStoreData
    });
    history.push('/non-existent-route');

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
