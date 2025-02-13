import { Route, Routes } from "react-router-dom";
import { HomeViews } from "../views/HomeViews";
import { MatchesViews } from "../views/MatchesViews";
import { PadelLayout } from "../layout/PadelLayout";
import { RankingViews } from "../views/RankingViews";
import { DasboardViews } from "../views/DasboardViews";

export const PadelRoutes = () => {
  return (
    <Routes>
      <Route  element={<PadelLayout />} >
      <Route path="/" element={<HomeViews />}/>
        <Route path="/matches" element={<MatchesViews />} />
        <Route path="/ranking" element={<RankingViews/>} />
        <Route path="/dasboard" element={<DasboardViews/>} />
      </Route>
    </Routes>
  );
};
