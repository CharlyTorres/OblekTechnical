import axios from 'axios'
// Servicio API Rick y Morty.


const baseURL = "https://rickandmortyapi.com/api/character/?page=1";

const RickandMorty = axios.create({
    baseURL
  });

export const getFirstFifteen = async () => {
    const { data } = await RickandMorty.get("/");
    const result = data.slice(0, 15);
    return result;
  };

 
