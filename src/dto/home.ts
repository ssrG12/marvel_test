export interface ListHeroesRequest {
  limit: number
  offset: number
}

export interface ListHeroesResponse {
  data: Data
  code: number
  etag: string
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
  results: ResultsHeroes[]
}

export interface ResultsHeroes {
  id: number
  urls: Urls[]
  name: string
  modified: Date
  comics: Section
  series: Section
  events: Section
  stories: Section
  description: string
  resourceURI: string
  thumbnail: Thumbnail
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Section {
  items: Items[]
  returned: number
  available: number
  collectionURI: string
}

export interface Items {
  name: string
  type: string
  resourceURI: string
}

export interface Urls {
  url: string
  type: string
}