import { IComment } from '../../types/comment';
import { getRatingWidth } from '../../utils';

type ReviewPropsType = {
  review: IComment,
}

const Review = ({
  review: {
    user,
    date,
    rating,
    comment
  },
}: ReviewPropsType
) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={`${user.avatarUrl}`} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${getRatingWidth(rating)}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {comment}
      </p>
      <time className="reviews__time" dateTime="2019-04-24">
        {new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </time>
    </div>
  </li>
);

export default Review;
