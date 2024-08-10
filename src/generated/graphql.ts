export type GetFilmsQuery = {
  allFilms?: {
    films?: Array<{
      title?: string | null;
      director?: string | null;
      releaseDate?: string | null;
      speciesConnection?: {
        species?: Array<{
          name?: string | null;
          classification?: string | null;
          homeworld?: { name?: string | null } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};
