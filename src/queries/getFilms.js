import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query GetFilms {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;
