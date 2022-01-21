export interface ReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: Date
}

export interface ProductModel {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  image: string
  description: string
  link: string
  price: number
  credit: number
  oldPrice: number
  characteristics: ProductCharacteristic[]
  advantages?: string
  initialRating: number
  createdAt: Date
  updatedAt: Date
  __v: number
  html?: string
  reviews: ReviewModel[]
  reviewCount: number
  reviewAvg?: number
  disadvantages: string
}

export interface ProductCharacteristic {
  value: string
  name: Name
}

export enum Name {
  Длительность = 'Длительность',
  ДокументОбОкончании = 'Документ об окончании',
  Сложность = 'Сложность',
  Школа = 'Школа',
}
