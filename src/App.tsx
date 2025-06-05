import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import './i18n';


export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans scroll-smooth">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


