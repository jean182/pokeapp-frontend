import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { POKE_API_URL } from "@utils/constants";

export const client = new ApolloClient({
  uri: POKE_API_URL,
  cache: new InMemoryCache({
  typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: offsetLimitPagination()
        },
      },
},
  })
});
