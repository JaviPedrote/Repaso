import { jugadores } from "../../data/jugadores";
import { GraficoComponent } from "../components/GraficoComponent";

export const HomeViews = () => {
  const player = jugadores[0];

  return (
    <div className="h-screen">
      <h1 className="text-5xl font-bold pl-10 pt-10 text-secondary">
        {player.name}
      </h1>
      <h2 className="text-xl font-bold pl-10 pt-10 text-secondary">
        <div>Position</div>
        {player.ranking}
      </h2>
      <div className="opacity-80 bg-thunderbird-200 relative h-59 w-88 rounded-lg shadow-2xl justify-center items-center flex flex-col ml-10 mt-5">
        <GraficoComponent
          total={player.totalMatches}
          wins={player.matchesWon}
          losses={player.matchesLost}
        />
      </div>
      <div className="opacity-80 bg-thunderbird-200 relative h-59 w-88 rounded-lg shadow-2xl justify-center items-center flex flex-col ml-10 mt-5">
        
      </div>
    </div>
  );
};
