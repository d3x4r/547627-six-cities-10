import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import {
  fetchOffersAction,
  loadOfferAction,
  loadNearPlacesAction,
  loadFavoritesOffersAction,
  checkAuthAction,
  loginAction,
  loadCommentsAction,
  createComment,
  createFavoriteOffer,
} from './api-actions';
import { APIRoute, FavoriteOfferStatus } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';

jest.mock('../services/redirect', () => () => jest.fn());

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch loginAction when POST /login', async () => {
    const fakeUser: AuthData = { email: 'xxx@xxx.xxx', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);
    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  describe('tests with offers', () => {
    it('should dispatch fetchOffers when GET /hotels', async () => {
      mockAPI
        .onGet(APIRoute.Hotels)
        .reply(200, []);

      const store = mockStore();

      await store.dispatch(fetchOffersAction());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchOffer when GET /hotels/{id}', async () => {
      mockAPI
        .onGet(`${APIRoute.Hotels}/1`)
        .reply(200);

      const store = mockStore();

      await store.dispatch(loadOfferAction('1'));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loadOfferAction.pending.type,
        loadOfferAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchNearPlaces when GET /hotels/{id}/nearby', async () => {
      mockAPI
        .onGet(`${APIRoute.Hotels}/12/nearby`)
        .reply(200);

      const store = mockStore();

      await store.dispatch(loadNearPlacesAction(12));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loadNearPlacesAction.pending.type,
        loadNearPlacesAction.fulfilled.type
      ]);
    });

    it('should dispatch fetchFavoritesOffers when GET /favorites', async () => {
      mockAPI
        .onGet(APIRoute.Favorites)
        .reply(200);

      const store = mockStore();

      await store.dispatch(loadFavoritesOffersAction());
      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loadFavoritesOffersAction.pending.type,
        loadFavoritesOffersAction.fulfilled.type
      ]);
    });

    it('should dispatch createFavoriteItem when POST /favorites}/{id}/status', async () => {
      mockAPI
        .onPost(`${APIRoute.Favorites}/15/${FavoriteOfferStatus.Favorite}`)
        .reply(200, {});

      const store = mockStore();

      await store.dispatch(createFavoriteOffer({ hotelId: 15, status: FavoriteOfferStatus.Favorite }));

      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toEqual([
        createFavoriteOffer.pending.type,
        createFavoriteOffer.fulfilled.type
      ]);
    });
  });

  describe('tests with comments', () => {
    it('should dispatch fetchComments when GET /comments/{id}', async () => {
      mockAPI
        .onGet(`${APIRoute.Comments}/11`)
        .reply(200);

      const store = mockStore();

      await store.dispatch(loadCommentsAction(11));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        loadCommentsAction.pending.type,
        loadCommentsAction.fulfilled.type
      ]);
    });

    it('should dispatch createComment when POST /comments/{id}', async () => {
      mockAPI
        .onPost(`${APIRoute.Comments}/12`)
        .reply(200);

      const store = mockStore();

      await store.dispatch(createComment({ hotelId: 12, commentBody: { comment: '12312', rating: 1 } }));

      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toEqual([
        createComment.pending.type,
        createComment.fulfilled.type
      ]);
    });
  });
});
