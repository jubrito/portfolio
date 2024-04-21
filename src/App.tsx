import "./App.css";
import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <div className="grid-container">
            <Nav />
            <About />
            <Header />
            <Skills />
        </div>
    );
}

export default App;
