import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import DetailPage from "./pages/detail-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="play/channels" />} />
      <Route path="play/channels">
        <Route index element={<LandingPage />} />
        <Route path=":videoId" element={<DetailPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
