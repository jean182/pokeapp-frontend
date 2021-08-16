import AboutPage from "@pages/about";
import HomePage from "@pages/home";
import PokedexPage from "@pages/pokedex";
import PokemonPage from "@pages/pokemon";

export type BootstrapColors = 
  | "primary" 
  | "secondary" 
  | "success" 
  | "danger" 
  | "warning" 
  | "info" 
  | "light" 
  | "dark"
  | "body"
  | "muted"
  | "white"

export interface PokemonTypeColorOptions {
  color: BootstrapColors
  gradient?: string
}

export enum RouteNames {
    Home = "/",
    Pokedex = "/pokedex",
    Pokemon = "/pokedex/:id",
    About = "/about",
}

export enum PokemonTypes {
  Normal = "normal",
  Fighting = "fighting",
  Flying = "flying",
  Poison = "poison",
  Ground = "ground",
  Rock = "rock",
  Bug = "bug",
  Ghost = "ghost",
  Steel = "steel",
  Fire = "fire",
  Water = "water",
  Grass = "grass",
  Electric = "electric",
  Psychic = "psychic",
  Ice = "ice",
  Dragon = "dragon",
  Dark = "dark",
  Fairy = "fairy",
  Unknown = "unknown",
  Shadow = "shadow",
}

export const ZERO = 0
export const ONE = 1
export const CARD_SIZE = 200
export const DEFAULT_LIMIT = 20
export const POKE_API_URL = 'https://beta.pokeapi.co/graphql/v1beta'
export const SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
export const PLACEHOLDER_IMAGE = 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'

export const ROUTES = [
    { path: RouteNames.Home, name: 'Home', Component: HomePage },
    { path: RouteNames.About, name: 'About', Component: AboutPage },
    { path: RouteNames.Pokedex, name: 'Pokedex', Component: PokedexPage },
    { path: RouteNames.Pokemon, name: 'Pokemon', Component: PokemonPage },
]

export const TYPES_ARR = 
[
    {
      name: "normal",
      initials: 'NRM',
      src: "https://cdn2.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png",
    },
    {
      name: "fighting",
      initials: 'FGT',
      src: "https://cdn2.bulbagarden.net/upload/3/3b/Fighting_icon_SwSh.png",
    },
    {
      name: "flying",
      initials: 'FLY',
      src: "https://cdn2.bulbagarden.net/upload/b/b5/Flying_icon_SwSh.png",
    },
    {
      name: "poison",
      initials: 'PSN',
      src: "https://cdn2.bulbagarden.net/upload/8/8d/Poison_icon_SwSh.png",
    },
    {
      name: "ground",
      initials: 'GRN',
      src: "https://cdn2.bulbagarden.net/upload/2/27/Ground_icon_SwSh.png",
    },
    {
      name: "rock",
      initials: 'RCK',
      src: "https://cdn2.bulbagarden.net/upload/1/11/Rock_icon_SwSh.png",
    },
    {
      name: "bug",
      initials: 'BUG',
      src: "https://cdn2.bulbagarden.net/upload/9/9c/Bug_icon_SwSh.png",
    },
    {
      name: "ghost",
      initials: 'GHO',
      src: "https://cdn2.bulbagarden.net/upload/0/01/Ghost_icon_SwSh.png",
    },
    {
      name: "steel",
      initials: 'STL',
      src: "https://cdn2.bulbagarden.net/upload/0/09/Steel_icon_SwSh.png",
    },
    {
      name: "fire",
      initials: 'FIR',
      src: "https://cdn2.bulbagarden.net/upload/a/ab/Fire_icon_SwSh.png",
    },
    {
      name: "water",
      initials: 'WTR',
      src: "https://cdn2.bulbagarden.net/upload/8/80/Water_icon_SwSh.png",
    },
    {
      name: "grass",
      initials: 'GRS',
      src: "https://cdn2.bulbagarden.net/upload/a/a8/Grass_icon_SwSh.png",
    },
    {
      name: "electric",
      initials: 'ELE',
      src: "https://cdn2.bulbagarden.net/upload/7/7b/Electric_icon_SwSh.png",
    },
    {
      name: "psychic",
      initials: 'PSY',
      src: "https://cdn2.bulbagarden.net/upload/7/73/Psychic_icon_SwSh.png",
    },
    {
      name: "ice",
      initials: 'ICE',
      src: "https://cdn2.bulbagarden.net/upload/1/15/Ice_icon_SwSh.png",
    },
    {
      name: "dragon",
      initials: 'DRA',
      src: "https://cdn2.bulbagarden.net/upload/7/70/Dragon_icon_SwSh.png",
    },
    {
      name: "dark",
      initials: 'DRK',
      src: "https://cdn2.bulbagarden.net/upload/d/d5/Dark_icon_SwSh.png",
    },
    {
      name: "fairy",
      initials: 'FAIRY',
      src: "https://cdn2.bulbagarden.net/upload/c/c6/Fairy_icon_SwSh.png",
    },
    {
      name: "shadow",
      initials: 'SHA',
      src: PLACEHOLDER_IMAGE,
    },
    {
      name: "unknown",
      initials: '???',
      src: PLACEHOLDER_IMAGE,
    },
];
