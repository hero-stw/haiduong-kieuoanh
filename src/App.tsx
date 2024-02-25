import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import RSVPList from "./pages/RSVPList.tsx";

function App() {
  return (
    <Routes>
        <Route path="/rsvp" element={<RSVPList />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
