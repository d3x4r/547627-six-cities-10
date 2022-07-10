type Rating = 1 | 2 | 3 | 4 | 5;

export const getRatingWidth = (rating: Rating): number => 20 * rating;
