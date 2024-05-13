import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";

function App() {
    return (
        <div className="grid-container">
            <Nav />
            <About />
            <Header />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
