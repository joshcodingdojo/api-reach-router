import { useEffect, useState } from "react";
import axios from "axios";

const Display = (props) => {
  const { pokeId } = props;
  const [pokeData, setPokeData] = useState(undefined);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => setPokeData(response.data))
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <div>
      {pokeData && (
        <>
          <p>{pokeData.name}</p>
          <p>{pokeData.height}</p>
        </>
      )}
    </div>
  );
};

export default Display;
