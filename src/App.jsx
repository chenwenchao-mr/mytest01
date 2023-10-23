import { BrowserRouter } from "react-router-dom";
import { CreateRoute } from "@/router";

export default function App() {
  return (
    <BrowserRouter>
      <CreateRoute />
    </BrowserRouter>
  );
}
