import { RouterProvider} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/Routes"



const App=()=> {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
