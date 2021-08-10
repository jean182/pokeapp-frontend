import React from 'react';
import { GET_POKEMON_LIST } from '../../gql';
import { useQuery } from '@apollo/client';
import Loader from '../loader';
import { DEFAULT_LIMIT, ONE, ZERO } from '../../utils/constants';
import { IPokemonListData, IPokemonListVars } from './pokemon-list.interfaces';
import { transformData } from './pokemon-list.handlers';
import Pagination from '../pagination';
import PokemonListItem from '../pokemon-list-item';


// WIP FIX pagination
export default function PokemonList() {
  const [meta, setMeta] = React.useState({
    pageNumber: ONE,
    pageSize: DEFAULT_LIMIT,
  });
  const { loading, data, fetchMore } = useQuery<
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
  const { pageNumber, pageSize } = meta;

  const onChangePage = async (_event: React.ChangeEvent<unknown>, page: number) => {
    const { data: result } = await fetchMore({
      variables: {
        offset:  DEFAULT_LIMIT * (page - 1)
      },
    })
    console.log(result)
    setMeta({
      pageNumber: page,
      pageSize: result.pokemon.length
    });
  };

  const showPageResults = () => {
    if (meta.pageNumber * DEFAULT_LIMIT > pokemonList.length) {
      return [-pageSize]
    }

    return [(pageNumber - 1) * pageSize, pageNumber * pageSize]
  }

  if (loading) return <Loader />

  return (
    <>
        <h1>Pokemon List</h1>
        <div className="row">
            {pokemonList.slice(...showPageResults()).map(({ id, name, types }) => (
              <div className="col-3" key={id}>
                <PokemonListItem
                  id={id}
                  name={name}
                  types={types}
                />
              </div>
            ))}
            <div className="py-3" />
            <Pagination
              current={DEFAULT_LIMIT}
              total={data?.pokemonCount.aggregate.count ?? 0}
              onChange={onChangePage}
            />
        </div>
    </>
  )
}