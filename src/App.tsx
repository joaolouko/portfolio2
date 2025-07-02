import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import './i18n';
import './styles/variables.scss';


export default function App() {
  return (
    <div className="color-background text-gray-100 font-sans scroll-smooth overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


