import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./locales/index.js";
import Loader from "./components/UI/Loader/index.jsx";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga";
// Initialize React Ga with your tracking ID
ReactGA.initialize("AW-10949806463");
ReactGA.initialize("G-TKD3LN2FB4");

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Provider store={store}>
			<Router>
				<Suspense fallback={<Loader />}>
					<App />
				</Suspense>
			</Router>
		</Provider>
	</HelmetProvider>,
);
