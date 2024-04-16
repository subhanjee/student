  import { Routes, Route } from "react-router-dom";
import LandingPage from "../page/landingPage";
import DetailPage from "../page/detailPage";
import Accommodation from "../page/accommodation";
 
 
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/detail" element={<DetailPage />}></Route>
      <Route path="/accomm" element={<Accommodation />}></Route>
     
    </Routes>
  );
}

export default Router;
