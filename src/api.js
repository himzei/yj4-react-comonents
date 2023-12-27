const BASE_PATH = "https://gateway.marvel.com:443";
const API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

console.log("api", API_KEY);

export async function comicsList(values) {
  const page = values.queryKey[0];
  const LIMIT = values.queryKey[1];
  const OFFSET = (page - 1) * LIMIT;
  return await fetch(
    `${BASE_PATH}/v1/public/comics?orderBy=focDate&&offset=${OFFSET}&limit=${LIMIT}&apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function detail(id) {
  const comicId = id.queryKey[1];
  return await fetch(
    `${BASE_PATH}/v1/public/comics/${comicId}?apikey=${API_KEY}`
  ).then((response) => response.json());
}

export async function detailCharacters(id) {
  const comicId = id.queryKey[1];
  console.log(comicId);
  return await fetch(
    `${BASE_PATH}/v1/public/comics/${comicId}/characters?apikey=${API_KEY}`
  ).then((response) => response.json());
}
export async function charactersData(values) {
  const page = values.queryKey[0];
  const LIMIT = values.queryKey[1];
  const OFFSET = (page - 1) * LIMIT;
  return await fetch(
    `${BASE_PATH}/v1/public/characters?orderBy=-modified&offset=${OFFSET}&limit=${LIMIT}&apikey=${API_KEY}`
  ).then((response) => response.json());
}
