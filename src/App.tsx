import { Routes, Route, Navigate } from "react-router-dom";
import { AllActivity, CompleteActivity, CurrentActivity } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllActivity />} />
      <Route path="active" element={<CurrentActivity />} />
      <Route path="completed" element={<CompleteActivity />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
