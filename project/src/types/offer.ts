export type Rating = '1' | '2' | '3' | '4' | '5' | null;

export interface IOffer {
  id: number;
  city: string;
  isPremium?: boolean;
  isBookMark?: boolean;
  img: {
    href: string;
    src: string;
  };
  price: number;
  priceText: string;
  name: string;
  type: string;
  rating: Rating
}
