import React, { useState } from 'react'; // Importando useState
import { Link } from 'react-router-dom'; // Importando Link
import { Menu } from 'lucide-react';

// NavLink Component
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="block md:inline text-gray-600 hover:text-blue-500 transition duration-300"
  >
    {children}
  </a>
);

const Novoacordo = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu mobile

  const toggleMenu = () => setIsOpen(!isOpen); // Função para alternar o menu mobile

  return (
    <div className="max-w-3xl mx-auto text-center p-6 text-gray-800">
      {/* Menu fixo no canto superior direito */}
      <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
          {/*Botão Menu Mobile*/}
                  <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
            {/* Menu para desktop */}
            <div className="hidden md:flex space-x-8 justify-end">
              <NavLink href="#novoacordo">Novo Acordo</NavLink>
              <NavLink href="#principaismudancas">Principais Mudanças</NavLink>
            </div>

            {/* Menu para dispositivos móveis */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-4 text-white">Menu</button>
              {isOpen && (
                <div className="mt-4 space-y-4">
                  <NavLink href="#novoacordo">Novo Acordo</NavLink>
                  <NavLink href="#principaismudancas">Principais Mudanças</NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Seção de conteúdo: Novo Acordo */}
      <div id="novoacordo" className="space-y-8 mt-12">
      <section
  id="inicio"
  className="w-full h-auto p-4 md:p-8 bg-gradient-to-r from-blue-500 to-purple-600"
>
  <div className="w-full">
    <h1 className="text-2xl font-bold mb-4 text-white text-center">Novo Acordo Ortográfico</h1>
  </div>
</section>




        <h2 className="text-lg mb-8">
          O Novo Acordo Ortográfico da Língua Portuguesa, que entrou em vigor no Brasil em 2009, trouxe mudanças na grafia de algumas palavras para unificar o português escrito nos países lusófonos.
        </h2>

        {/* Exemplo de mudança de palavras */}
        <div>
          <h2 className="text-lg font-semibold">1 - Ideia</h2>
          <p>Antes: <span className="italic">idéia</span></p>
          <p>Agora: <span className="italic">ideia</span></p>
          <p>Conceito ou pensamento; opinião.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">2 - Voo</h2>
          <p>Antes: <span className="italic">vôo</span></p>
          <p>Agora: <span className="italic">voo</span></p>
          <p>Deslocamento no ar, geralmente realizado por aves ou aviões.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">3 - Heroico</h2>
          <p>Antes: <span className="italic">heróico</span></p>
          <p>Agora: <span className="italic">heroico</span></p>
          <p>Que possui características de herói; corajoso.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">4 - Joia</h2>
          <p>Antes: <span className="italic">jóia</span></p>
          <p>Agora: <span className="italic">joia</span></p>
          <p>Objeto de adorno, geralmente feito de material precioso, como ouro ou pedras preciosas.</p>
        </div>

        {/* Outras mudanças aqui */}
      </div>

      {/* Seção de principais mudanças */}
      <div id="principaismudancas" className="mt-12">
        <h1 className="text-2xl font-bold mb-6">Principais mudanças do novo acordo ortográfico:</h1>

        {/* Mudanças do acordo */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">1 - Fim do Trema</h2>
            <p>O trema foi abolido em todas as palavras da língua portuguesa. Agora, palavras como "lingüiça" e "freqüência" são escritas como "linguiça" e "frequência".</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">2 - Mudanças no Hífen</h2>
            <p>Em locuções (expressões compostas por duas ou mais palavras), o hífen foi eliminado. Por exemplo:</p>
            <p>Antes: "pé-de-moleque", "mão-de-obra"</p>
            <p>Agora: "pé de moleque", "mão de obra"</p>
            <p>Quando o prefixo termina em uma vogal e a palavra seguinte começa com uma vogal diferente, o hífen foi eliminado:</p>
            <p>Antes: "auto-escola", "anti-aéreo"</p>
            <p>Agora: "autoescola", "antiaéreo"</p>
            <p>Quando o prefixo termina em "r" ou "s", essas letras são duplicadas se a palavra seguinte começar com "r" ou "s":</p>
            <p>Antes: "anti-rugas", "auto-sugestão"</p>
            <p>Agora: "antirrugas", "autossugestão"</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">3 - Acentuação</h2>
            <p>O acento diferencial foi eliminado em algumas palavras paroxítonas terminadas em "oo" e "ee":</p>
            <p>Antes: "vôo", "enjôo"</p>
            <p>Agora: "voo", "enjoo"</p>
            <br></br><br></br>
            <Link to="/">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Voltar para a página inicial
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novoacordo;