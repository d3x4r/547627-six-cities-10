import { ReviewForm } from '../review-form';
import { Review } from '../review';
import { IReview } from '../../types/review';

interface IReviewsProps {
  reviews: IReview[]
}

const Reviews = ({ reviews }: IReviewsProps) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
    <ReviewForm />
  </section>
);

export default Reviews;
