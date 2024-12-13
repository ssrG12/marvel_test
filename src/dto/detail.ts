export interface DetailRequest {
  limit: number
  offset: number
  id: number | undefined
}

export interface DetailResponse {
  data: Data
  etag: string
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
}

export interface Data {
  limit: number
  total: number
  count: number
  offset: number
  results: Results[]
}

export interface Results {
  id: number
  urls: Urls
  ean: string
  upc: string
  isbn: string
  issn: string
  dates: Dates
  variants: []
  title: string
  format: string
  series: Series
  prices: Prices
  modified: Date
  events: Section
  collections: []
  stories: Section
  images: Thumbnail
  creators: Section
  digitalId: number
  pageCount: number
  characters: Section
  issueNumber: number
  description: string
  diamondCode: string
  resourceURI: string
  collectedIssues: []
  thumbnail: Thumbnail
  textObjects: TextObjects[]
  variantDescription: string
}

export interface TextObjects {
  text: string
  type: string
  language: string
}

export interface Urls {
  url: string
  type: string
}

export interface Series {
  name: string
  resourceURI: string
}

export interface Dates {
  date: Date
  type: string
}

export interface Prices {
  type: string
  price: number
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Section {
  items: Items[]
  available: number
  collectionURI: string
}

export interface Items {
  name: string
  type?: string
  role?: string
  resourceURI: string
}