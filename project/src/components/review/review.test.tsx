import { render, screen } from '@testing-library/react';
import { Review } from '.';
import { Rating } from '../../const';
import { IComment } from '../../types/comment';

describe('Review test', () => {
  it('should render "Review" with name prop', async () => {
    const testComment: IComment = {
      id: 1,
      comment: 'test comment test',
      rating: Rating.Good,
      date: '12.10.2022',
      user: {
        id: 12,
        isPro: false,
        name: 'firstName',
        avatarUrl: 'xxx.xxx.xxx'
      },
    };

    render(<Review review={testComment} />);
    expect(screen.getByText(testComment.user.name)).toBeInTheDocument();
    expect(screen.getByText(testComment.date)).toBeInTheDocument();
    expect(screen.getByText(testComment.comment)).toBeInTheDocument();
  });
});
