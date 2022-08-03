import { Rating } from './offer';

export interface IComment {
  comment: string
  date: string
  id: number
  rating: Rating
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}
