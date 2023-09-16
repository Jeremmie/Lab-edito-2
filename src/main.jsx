import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
// import RequestFullScreen from "./components/RequestFullScreen.jsx";
import './index.css'

studio.extend(extension);
studio.initialize();
studio.ui.hide()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      {/* <RequestFullScreen /> */}
      <App />
    </Suspense>
  </React.StrictMode>
)
