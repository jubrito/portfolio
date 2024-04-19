import "./App.css";
import ju from "./assets/ju.png";

function App() {
  return (
    <>
      <div className="container">
        <nav>
          <a href="">About</a>
          <a href="">Projects</a>
        </nav>
        <main>
          <p>
            <h1>I'm Juliana Witzke de Brito</h1>
          </p>
          <p>
            I'm a web developer with a 4 year experience as a front-end
            developer. I'm based in São Paulo, Brazil.
          </p>
        </main>
      </div>
      <header>
        <img
          src={ju}
          alt="White girl with blue curly medium hair, I have green eyes and I'm wearing black lipstick"
          className="header"
        />
      </header>
    </>
  );
}

export default App;
