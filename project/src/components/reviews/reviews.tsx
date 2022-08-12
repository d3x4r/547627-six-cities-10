import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ReviewForm } from '../review-form';
import { loadCommentsAction } from '../../store/api-actions';
import { Review } from '../review';
import { AuthorizationStatus} from '../../const';
import { getComments, getCurrentOffer } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


type ReviewsPropsType = {
  offerId: number;
}

const MAX_REVIEWS_PER_PAGE = 10;

const Reviews = ({ offerId }: ReviewsPropsType) => {
  const comments = useAppSelector(getComments);
  const currentOffer = useAppSelector(getCurrentOffer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCommentsAction(offerId));
  }, [currentOffer]);

  if (!comments) {
    return <>No comments</>;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.slice(0, MAX_REVIEWS_PER_PAGE).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((comment) => <Review key={comment.id} review={comment} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId} />}
    </section>
  );
};

export default Reviews;
