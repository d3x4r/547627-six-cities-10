import { useState } from 'react';
import { Rating } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createComment } from '../../store/api-actions';
import { ReviewFormType } from './types';
import { CommentLenght } from './const';
import { getReviewFormLoadedState } from '../../store/offers-data/selectors';

type ReviewFormPropsType = {
  offerId: number;
}

const ReviewForm = ({ offerId }: ReviewFormPropsType) => {
  const dispatch = useAppDispatch();
  const isReviewFormSubmited = useAppSelector(getReviewFormLoadedState);
  const [formState, setFormState] = useState<ReviewFormType>({
    comment: '',
    rating: null,
  });

  const onFormChange = ({ target: { name, value } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const { comment, rating } = formState;
    evt.preventDefault();
    dispatch(createComment({ hotelId: offerId, commentBody: { comment, rating: Number(rating) } }));
    setFormState({ comment: '', rating: null });
  };

  const currentCommentLength = formState.comment.length;

  const isFormDisabled = currentCommentLength < CommentLenght.min
    || currentCommentLength > CommentLenght.max
    || currentCommentLength === 0
    || formState.rating === null;

  return (
    <form
      className="reviews__form form"
      method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={Rating.Perfect}
          id="5-stars"
          type="radio"
          checked={formState.rating === Rating.Perfect}
          onChange={onFormChange}
          disabled={isReviewFormSubmited}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={Rating.Good}
          id="4-stars"
          type="radio"
          checked={formState.rating === Rating.Good}
          onChange={onFormChange}
          disabled={isReviewFormSubmited}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={Rating.NotBad}
          id="3-stars"
          type="radio"
          checked={formState.rating === Rating.NotBad}
          onChange={onFormChange}
          disabled={isReviewFormSubmited}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={Rating.Badly}
          id="2-stars"
          type="radio"
          checked={formState.rating === Rating.Badly}
          onChange={onFormChange}
          disabled={isReviewFormSubmited}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={Rating.Terribly}
          id="1-star"
          type="radio"
          checked={formState.rating === Rating.Terribly}
          onChange={onFormChange}
          disabled={isReviewFormSubmited}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.comment}
        onChange={onFormChange}
        disabled={isReviewFormSubmited}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormDisabled || isReviewFormSubmited}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
