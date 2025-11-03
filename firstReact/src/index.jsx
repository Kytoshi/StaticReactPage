import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

function ReasonsList() {
  return (
    <div>
      <header>
        <img src='./src/reactLogo.png' alt='React Logo' width='40px' />
      </header>
      <main>
        <h1>Reasons I want to learn React</h1>
        <ol>
          <li>It's one of the more popular frontend libraries</li>
          <li>I want to become a frontend / UI Engineer</li>
          <li>Make a living to support those around me</li>
          <li>To create cool projects I can be proud of</li>
        </ol>
      </main>
      <footer>
        <small>© 2025 Koichi Kodama</small>
      </footer>
    </div>
  );
}

root.render(<ReasonsList />);
