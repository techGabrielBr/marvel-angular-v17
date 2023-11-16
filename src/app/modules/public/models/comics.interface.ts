export interface ComicsResult{
  data: {
    total: number,
    count: number,
    limit: number,
    offset: number,
    results: Comic[]
  }
}

export interface Comic{
  title: string,
  description: string
  characters: {
    items: ComicSubItem[]
  },
  series: {
    items: ComicSubItem[]
  },
  thumbnail: {
    path: string,
    extension: string
  }
}

interface ComicSubItem {
  name: string
  resourceURI: string
}
