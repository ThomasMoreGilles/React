import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Plans from "./pages/Plans";
import Trainers from "./pages/Trainers";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./services/firebase";
import { useLocalStorage } from "@uidotdev/usehooks";

function ProvidedApp() {
	const [defaultTab, setDefaultTab] = useLocalStorage("defaultTabIndex", 0);

	return (
		<Tabs defaultIndex={defaultTab} onSelect={(index) => setDefaultTab(index)}>			
			<TabList>
				<Tab>Home</Tab>
				<Tab>About</Tab>
				<Tab>Contact</Tab>
				<Tab>Gallery</Tab>
				<Tab>Plans</Tab>
				<Tab>Trainers</Tab>
			</TabList>
			<TabPanel><Home /></TabPanel>
			<TabPanel><About /></TabPanel>
			<TabPanel><Contact /></TabPanel>
			<TabPanel><Gallery /></TabPanel>
			<TabPanel><Plans /></TabPanel>
			<TabPanel><Trainers /></TabPanel>
		</Tabs>
	);
}

function App() {
	return (
		<BrowserRouter>
			<ProvidedApp/>
		</BrowserRouter>
	);
}
export default App;