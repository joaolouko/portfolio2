import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import './i18n';
import './styles/variables.scss';


export default function App() {
  return (
    <div className="color-background text-gray-100 min-h-screen font-sans scroll-smooth">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


