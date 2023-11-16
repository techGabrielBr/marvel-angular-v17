export interface SeriesResult{
  data: {
    total: number,
    count: number,
    limit: number,
    offset: number,
    results: Serie[]
  }
}

export interface Serie{
  title: string,
  description: string
  characters: {
    items: SerieSubItem[]
  },
  series: {
    items: SerieSubItem[]
  },
  thumbnail: {
    path: string,
    extension: string
  }
}

interface SerieSubItem {
  name: string
  resourceURI: string
}
