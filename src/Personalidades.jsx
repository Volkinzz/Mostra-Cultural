import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link
import FernandoPessoa from "./imagens/fernandopessoa.jpeg";
import MachadoDeAssis from "./imagens/machadodeassis.jpeg";
import AlvaresDeAzevedo from "./imagens/alvaresdeazevedo.jpeg";
import JoseOswald from "./imagens/joseoswald.jpeg";
import JoseOswald2 from "./imagens/joseoswald2.jpeg";
import ManuelCarneiro from "./imagens/manuelcarneiro.jpeg";
import PauloFreire from "./imagens/paulofreire.jpeg";
import PauloFreire2 from "./imagens/paulofreire2.jpeg";
import MarioRaul from "./imagens/marioraul.jpeg";
import Abl from "./imagens/abl.jpeg";

const Personalidades = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section id="inicio" className="w-full h-auto p-4 md:p-8 bg-gradient-to-r from-blue-500 to-purple-600">
  <h1 className="text-2xl font-bold mb-4 text-white text-center">Personalidades</h1>
</section>

        <br></br>
        <section className="mb-12">
        <div className="flex justify-center mb-4">
          <img src={Abl} alt="ABL" className="w-32 h-32 mx-2 rounded-full" />
        </div>
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Academia Brasileira de Letras (ABL)</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          A Academia Brasileira de Letras (ABL) foi fundada em 1897, com o objetivo de promover a literatura e a cultura do Brasil. 
          Composta por grandes nomes da literatura brasileira, a ABL tem o compromisso de preservar e difundir a língua portuguesa 
          e o patrimônio literário do país. A instituição é composta por 40 membros, conhecidos como "imortais", e é uma das mais 
          importantes do Brasil na área literária.
        </p>
      </section>
      <br></br>
      <section className="mb-12">
        <img src={FernandoPessoa} alt="Fernando Pessoa" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Fernando Pessoa</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Fernando Pessoa (1888-1935) foi um dos maiores poetas portugueses do século XX, 
          conhecido por sua complexa personalidade e pela criação de vários heterônimos, 
          personagens literários com estilos e personalidades próprios. Nascido em Lisboa em 1888, Pessoa 
          passou parte de sua infância na África do Sul, onde teve uma educação inglesa, o que influenciou 
          muito sua escrita. Entre seus heterônimos mais famosos estão Alberto Caeiro, Ricardo Reis e Álvaro de Campos, 
          cada um com uma visão distinta sobre a vida e a poesia. Pessoa escreveu sobre temas profundos como a existência, 
          a identidade e a espiritualidade, e sua obra só ganhou verdadeiro reconhecimento após sua morte, em 1935, 
          consolidando-o como uma figura essencial da literatura mundial.
        </p>
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">O Guardador de Rebanhos:</h2>
        <div className="text-lg text-gray-600 mb-4 text-center">
          <p>
            Sou um guardador de rebanhos. <br />
            O rebanho é os meus pensamentos <br />
            E os meus pensamentos são todos sensações. <br />
            Penso com os olhos e com os ouvidos <br />
            E com as mãos e os pés <br />
            E com o nariz e a boca. <br /><br />

            Pensar uma flor é vê-la e cheirá-la <br />
            E comer um fruto é saber-lhe o sentido. <br /><br />

            Por isso quando num dia de calor <br />
            Me sinto triste de gozá-lo tanto, <br />
            E me deito ao comprido na erva, <br />
            E fecho os olhos quentes, <br />
            Sinto todo o meu corpo deitado na realidade, <br />
            Sei a verdade e sou feliz.
          </p>
        </div>
      </section>
      <br></br>
      <section className="mb-12">
        <img src={MachadoDeAssis} alt="Machado de Assis" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Machado de Assis</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Machado de Assis (1839-1908) foi um dos mais importantes escritores brasileiros, fundador da Academia Brasileira de Letras. 
          Autodidata e vindo de origem humilde, ele se destacou com romances que criticam a sociedade brasileira, explorando temas como hipocrisia, desigualdade e questões psicológicas. 
          Suas obras mais conhecidas, como Memórias Póstumas de Brás Cubas, Dom Casmurro e Quincas Borba, trazem narrativas irônicas e personagens complexos. 
          Com uma abordagem inovadora e crítica, Machado se tornou um dos grandes nomes da literatura mundial.
        </p>
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">A Carolina:</h2>
        <div className="text-lg text-gray-600 mb-4 text-center">
          <p>
            Querida, ao pé do leito derradeiro, <br />
            Em que descansas dessa longa vida, <br />
            Aqui venho e virei, pobre querida, <br />
            Trazer-te o coração do companheiro. <br /><br />

            Pulsa-lhe aquele afeto verdadeiro <br />
            Que, a despeito de toda humana lida, <br />
            Fez nossa vida uma aventura erguida <br />
            Às regiões de um sonho alvissareiro. <br /><br />

            Trago-te flores — restos arrancados <br />
            Da terra que nos viu passar unidos <br />
            E ora mortos nos deixa e separados. <br /><br />

            Que eu, se tenho nos olhos malferidos <br />
            Pensamentos de vida formulados, <br />
            São pensamentos idos e vividos.
          </p>
        </div>
      </section>
      <br></br>
      <section className="mb-12">
        <img src={AlvaresDeAzevedo} alt="Álvares de Azevedo" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Álvares de Azevedo</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Álvares de Azevedo, nascido em 1831, foi um importante poeta, contista e dramaturgo brasileiro, 
          considerado um dos grandes nomes da segunda geração do romantismo no Brasil, também conhecida como geração ultra-romântica. 
          Sua obra é marcada pela melancolia, idealização da morte e pessimismo, temas que refletem as influências europeias e o sentimento de escapismo da época.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Nascido em São Paulo, Azevedo se destacou como estudante na Faculdade de Direito do Largo de São Francisco, onde se aproximou dos ideais românticos europeus. 
          Sua produção literária é marcada pela dualidade entre a realidade e o desejo de fuga, o amor e a morte, e a melancolia, temas que se tornaram característicos do seu estilo.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Embora sua vida tenha sido curta, com sua morte precoce em 1852, suas obras deixaram um impacto duradouro, tornando-o um ícone do romantismo brasileiro.
        </p>
      </section>
      <br></br>
      <section className="mb-12">
        <div className="flex justify-center mb-4">
          <img src={JoseOswald} alt="José Oswald de Souza Andrade" className="w-32 h-32 mx-2 rounded-full" />
        </div>
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">José Oswald de Souza Andrade</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          José Oswald de Souza Andrade (1890-1954) foi um jornalista, advogado e um dos principais nomes do modernismo brasileiro. 
          Participou ativamente da Semana de Arte Moderna de 1922, ajudando a formar o movimento que promoveu uma renovação nas artes e na literatura brasileiras.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Oswald fundou a revista O Pirralho em 1911, e com outros intelectuais do movimento, lançou os movimentos Pau-Brasil (1924/25) e Antropofagia (1928), 
          sendo responsável por uma poesia que unia vanguardas europeias com elementos da cultura brasileira. Através de sua escrita, ele desafiou as estruturas políticas e culturais do país.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Seus escritos refletiram uma crítica social e política, além de sua busca por uma identidade nacional autêntica. 
          Ele também se envolveu ativamente com o Partido Comunista Brasileiro e foi um influente teórico da cultura brasileira até sua morte em 1954.
        </p>
      </section>
      <br></br>
      <section className="mb-12">
        <img src={ManuelCarneiro} alt="Manuel Carneiro de Sousa Bandeira Filho" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Manuel Carneiro de Sousa Bandeira Filho</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Manuel Carneiro de Sousa Bandeira Filho, mais conhecido como Manuel Bandeira (1886-1968), 
          foi um dos maiores poetas brasileiros do século XX. Sua obra está inserida no Modernismo, e ele é conhecido por sua poesia de intensa 
          emoção e sensibilidade. Com um estilo simples e direto, Bandeira abordou temas como a morte, a doença e o sofrimento, mas também 
          a beleza da vida e do cotidiano.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Ele foi influenciado por movimentos literários europeus, como o simbolismo e o modernismo, mas sua escrita também reflete uma forte 
          ligação com a realidade brasileira e seus problemas sociais. Suas obras mais conhecidas incluem "A Moreninha", "Eu e Outras Poesias", 
          "Poesias Completas" e "O Mundo de Manuel Bandeira", e ele se tornou um ícone da literatura brasileira.
        </p>
      </section>
      <br></br>
      <section className="mb-12">
        <div className="flex justify-center mb-4">
          <img src={PauloFreire} alt="Paulo Freire" className="w-32 h-32 mx-2 rounded-full" />
        </div>
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Paulo Freire</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Paulo Freire (1921-1997) foi um pedagogo brasileiro mundialmente reconhecido por sua teoria e prática educacional. 
          Ele defendia uma educação democrática e libertadora, que partisse da realidade dos alunos, promovendo um ensino que fosse ao mesmo tempo crítico e transformador. 
          Sua obra mais famosa, "Pedagogia do Oprimido", se tornou um clássico da educação mundial.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Freire foi um defensor da pedagogia crítica, baseada no diálogo entre professor e aluno, e acreditava que a educação deveria 
          ser um meio de empoderar as pessoas para que elas pudessem transformar suas próprias realidades. Sua teoria educacional influenciou 
          movimentos sociais e educacionais em diversos países e ele é considerado um dos maiores teóricos da educação do século XX.
        </p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Sua abordagem pedagógica foi desenvolvida principalmente no Brasil, mas se espalhou para diversos lugares ao redor do mundo, 
          transformando a educação como um meio de libertação e conscientização. Sua obra continua a ser estudada e aplicada até hoje em 
          projetos educacionais e sociais.
        </p>
      </section>
      <br></br>
      <section className="mb-12">
        <img src={MarioRaul} alt="Mario Raul" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Mario Raul</p>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Mario Raul de Moraes Andrade foi um dos grandes nomes da literatura brasileira, poeta, ensaísta e crítico literário. 
          Ele teve importante papel na construção do movimento modernista no Brasil e foi um dos principais intelectuais da geração que 
          buscou criar uma identidade cultural própria para o país. 
        </p>
      </section>
     <br></br><br></br>
      <Link to="/">
  <div className="flex justify-center items-center">
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
      Voltar para a página inicial
    </button>
  </div>
</Link>
    </div>
  );
};

export default Personalidades;
