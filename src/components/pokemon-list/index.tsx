import React from 'react';
import { GET_POKEMON_LIST } from '@gql';
import { useQuery } from '@apollo/client';
import Loader from '@components/loader';
import { DEFAULT_LIMIT, ZERO } from '@utils/constants';
import { IPokemonListData, IPokemonListVars } from './pokemon-list.interfaces';
import { transformData } from './pokemon-list.handlers';
import PokemonListItem from '@components/pokemon-list-item';
import PokedexPlaceholder from '@components/initial-loader';
import useInfiniteScroll from "react-infinite-scroll-hook";


export default function PokemonList() {
  const [currentOffset, setCurrentOffset] = React.useState(ZERO);
  const { loading, data, error, fetchMore } = useQuery<
    IPokemonListData,
    IPokemonListVars
  >(
    GET_POKEMON_LIST,
    {
      variables: {
        limit: DEFAULT_LIMIT,
        offset: ZERO,
      },
      fetchPolicy: "cache-first",
    }
  );

  const pokemonList = data?.pokemon.map(transformData) ?? []
  const total = data?.pokemonCount.aggregate.count ?? 0
  const hasNextPage = pokemonList.length < total

  const loadMore = async () => {
    const offset = currentOffset + DEFAULT_LIMIT
    await fetchMore({
      variables: {
        offset
      },
    })
    setCurrentOffset(offset)
  };

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
  });

  if (loading && pokemonList.length === 0) return <PokedexPlaceholder />

  return (
    <>
      <h1>Pokemon List</h1>
      <div className="row">
        {pokemonList.map(({ id, name, types }) => (
          <div className="col-sm-3" key={id}>
            <PokemonListItem
              id={id}
              name={name}
              types={types}
            />
          </div>
        ))}
      </div>
      {(loading || hasNextPage) && (
          <div className="text-center" ref={sentryRef}>
            <Loader />
          </div>
        )}
    </>
  )
}