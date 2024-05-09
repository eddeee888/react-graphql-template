import { FC } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { usePokemonsQuery } from "./App.generated";

const App: FC = () => {
  const { loading, error, data } = usePokemonsQuery({
    variables: {
      limit: 10,
    },
  });

  if (loading) {
    return <img src={reactLogo} className="logo react" alt="React logo" />;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <img src={reactLogo} className="logo react" alt="React logo" />;
  }

  return (
    <div>
      {data.pokemon_v2_pokemon.map((pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default App;
