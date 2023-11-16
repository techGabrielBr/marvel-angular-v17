export interface CharactersResult{
  data: {
    total: number,
    count: number,
    limit: number,
    offset: number,
    results: Character[]
  }
}

export interface Character{
  name: string,
  description: string
  comics: {
    items: CharacterSubItem[]
  },
  series: {
    items: CharacterSubItem[]
  },
  thumbnail: {
    path: string,
    extension: string
  }
}

interface CharacterSubItem {
  name: string
  resourceURI: string
}
