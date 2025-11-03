import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header className='header'>
      <img src='./src/reactLogo.png' alt='React Logo' className='logo' />
      <nav>
        <ul className='nav-list'>
          <li className='nav-item'>Pricing</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main className='main-content'>
      <h1>Reasons I want to learn React</h1>
      <ol>
        <li>It's one of the more popular frontend libraries</li>
        <li>I want to become a frontend / UI Engineer</li>
        <li>Make a living to support those around me</li>
        <li>To create cool projects I can be proud of</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <small>© 2025 Koichi Kodama</small>
    </footer>
  );
}

function ReasonsList() {
  return (
    <>
      <div className='container'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

root.render(<ReasonsList />);
