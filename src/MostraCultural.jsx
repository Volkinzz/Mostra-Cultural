import React from 'react';
import { Menu } from 'lucide-react'; // Importando o ícone Menu
import { Link } from 'react-router-dom'; // Importando Link
import SophiaMello from "./imagens/sophiamello.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo ou título */}
          <div className="text-xl font-bold text-gray-800">MOSTRA CULTURAL 2024: PROJETO MELLO</div>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Menu Desktop - Ajustando para estar no canto superior direito */}
        <div className="hidden md:flex space-x-8 absolute top-0 right-0 p-4">
          <NavLink href="#inicio">Início</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#projetos">Projetos</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#projetos">Projetos</NavLink>
            <NavLink href="#contato">Contato</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

// NavLink Component
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="block md:inline text-gray-600 hover:text-blue-500 transition duration-300"
  >
    {children}
  </a>
);

const HeroSection = () => (
  <section id="inicio" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-500 to-purple-600 ">
    <div className="container mx-auto px-6 text-center ">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
        MOSTRA CULTURAL 2024: PROJETO MELLO
      </h1>
      <p className="text-xl text-white mb-8">
        Explorando Arte, Cultura e Conhecimento
      </p>
    </div>
  </section>
);

const ProjectsSection = () => {
  const projects = [
    {
      image: "{/* Imagem dos trabalhos */}",
      title: "Caio de Lima Antunes",
      description: "Nascido em São José dos Campos"
    },
    {
      image: "{/* Imagem dos trabalhos */}",
      title: "Gabriel Luiz",
      description: "Nascido em São José dos Campos"
    },
    {
      image: "{/* Imagem dos trabalhos */}",
      title: "Igor Moreno",
      description: "Nascido em São José dos Campos"
    }
  ];
};

const GallerySection = () => (
  <section id="projetos" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Galeria de Projetos
      </h2>
      <div className="flex justify-center items-center my-auto">
        <div className="flex space-x-1">
          <Link to="/novoacordo">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Novo Acordo Ortográfico
            </button>
          </Link>
          <Link to="/personalidades">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Personalidades
            </button>
          </Link>
          <Link to="/poema">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Poemas
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-200 p-4 rounded-lg">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfoR-fgtpBC85Aqj1jw-3NJJqkeyT5LCJ4AmRfPTcigKX7GyQ/viewform?embedded=true"
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full"
      >
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Pesquisa de satisfação no Google Forms
        </button>
      </a>
    </form>
  );
};

const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <section id="sobre" className="py-16 bg-white">
  <div className="container mx-auto px-6 text-center">
    {/* Imagem da Sophia Mello */}
    <h2 className="text-3xl font-bold text-gray-800 mb-8">
      Sobre o Evento
    </h2>
    <div className="flex justify-center mb-8">
      <img src={SophiaMello} alt="Sophia de Mello Breyner Andresen" className="w-32 h-32 rounded-full" />
    </div>
    <h1>Sophia de Mello Breyner Andresen</h1>
    <div className="max-w-3xl mx-auto text-gray-600">
      <br></br>
      <p className="mb-4">
      Sophia de Mello Breyner Andresen (1919-2004), uma das mais destacadas poetisas e escritoras lusitanas do século XX  nascida no Porto em uma família de pensadores com fortes raízes na cultura clássica e literatura,tendo recebido uma educação refinada e parte de sua infância vivida em Lisboa.No decorrer da juventude teve uma experiência significativa com os eventos da Segunda Guerra Mundial e com o agitado cenário político de Portugal,o que viria moldar sua produção literária. {'\n'}
      {'\n'}
      A poetisa não só se dedicava à poesia como também era uma defensorá dos valores republicanos e democráticos; ela criticava o regime do Estado Novo e foi uma voz contrária à ditadura que reinou em Portugal até à Revolução dos Cravos em 1974.A sua sensibilidade para com a política e o contexto social do país reflete-se em muitas das suas criações poéticas.A sua poesia vai além da contemplação da natureza e incide também sobre temas como justiça,liberdade e dignidade humana. {'\n'}
      {'\n'}
      o nome "projeto de mello" se da pela ideia de manter em memória a grande poetisa que foi Sophia de Mello, devido suas grandes obras e influência na poesia portuguesa contemporânea, algumas de suas obras foram: “O Jardim e a Casa”, “Casa Branca”, “O Jardim Perdido” e “Jardim e a Noite”, obras que recordam sua infância e juventude{'\n'}
      {'\n'}
      </p>
    </div>
  </div>
</section>
      <ProjectsSection />
      <GallerySection />
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Entre em Contato
          </h2>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Mostra Cultural. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
