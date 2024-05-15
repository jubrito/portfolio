import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { Professional } from "./components/Professional/Professional";
import { Education } from "./components/Education/Education";

function App() {
    return (
        <div className="grid-container">
            <Nav />
            <About />
            <Header />
            <Skills />
            <Projects />
            <Professional />
            <Education />
        </div>
    );
}

export default App;
