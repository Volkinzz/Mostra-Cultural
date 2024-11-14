import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importando Link

const Poema = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const toggleTooltip = (word, event) => {
    if (selectedWord === word) {
      setSelectedWord(null); // Desaparece o tooltip se clicar novamente
    } else {
      setSelectedWord(word); // Exibe o tooltip com a palavra clicada
      const rect = event.target.getBoundingClientRect();

      // Calcula a posição do tooltip logo abaixo da palavra, com um pequeno espaçamento
      setPosition({
        top: rect.bottom + window.scrollY + 5, // Coloca o tooltip logo abaixo da palavra, com espaçamento de 5px
        left: rect.left + (rect.width / 2) - 75 // Centraliza horizontalmente
      });
    }
  };

  const wordDefinitions = {
    "Rebentar-se": "Romper-se, estourar; refere-se ao ato de algo se partir ou se desfazer.",
    "Vivente": "Pessoa viva; aquilo que está em estado de vida.",
    "Desfolhem": "Retirar as folhas; também pode significar destruir algo delicado, como uma flor.",
    "Impura": "Que contém elementos indesejáveis; contaminada ou não pura.",
    "Passamento": "Morte, falecimento.",
    "Poento": "Coberto de poeira ou pó; empoeirado.",
    "Pesadelo": "Sonho angustiante ou aterrorizante; pode representar algo difícil ou desagradável.",
    "Dobre": "Toque de sinos que indica luto.",
    "Desterro": "Exílio ou banimento, ato de ser mandado para longe de sua terra natal.",
    "Errante": "Que vaga sem rumo; muitas vezes associado a alguém sem destino fixo ou propósito.",
    "Saudade": "Sentimento de tristeza ou nostalgia por algo ou alguém que está distante ou ausente.",
    "Definhas": "Ato de perder forças ou saúde, enfraquecer-se aos poucos.",
    "Endoudecido": "Estado de loucura ou de agitação intensa (forma antiga de ‘enlouquecido’).",
    "Inunda": "Cobre de água ou enche intensamente; neste contexto, pode representar o transbordar de emoções.",
    "Seios": "No poema, significa o peito ou o centro dos sentimentos e emoções.",
    "Ilusão": "Algo imaginado ou desejado, mas que não corresponde à realidade.",
    "Cristalizar-se": "Tornar-se claro ou definitivo; algo que antes era incerto, mas agora se solidifica.",
    "Preludia": "Inicia uma melodia ou canto; começar algo de maneira sutil, como o prelúdio de uma canção.",
    "Protegei": "Forma arcaica de 'protejam'; usado para pedir cuidado e amparo.",
    "Derramai": "Espalhar em gotas; também pode ser usado para expressar a ideia de entregar sentimentos, como ‘derramar’ emoções.",
    "Velar": "Cuidar ou vigiar; também pode significar encobrir, como uma sombra que protege ou observa.",
    "Prantear": "Lamentar, chorar ou expressar tristeza por algo ou alguém.",
    "Lousa": "Lápide ou pedra usada para marcar um túmulo.",
    "Ansiedade": "É um sentimento de preocupação e apreensão sobre algo que está por vir.",
    // Novas palavras e definições
    "Vê-la" : 'Combinação do verbo "ver" com o pronome "a," usada para se referir ao ato de ver uma pessoa ou coisa feminina.',
    "Ordinária": 'comum, simples.',
    "Acaricia": 'toca de forma suave e afetuosa.',
    "Completa": 'encerra, torna-se inteira.',
    "Amanhecer": 'início do dia, novo começo.',
    "Origina": 'surge, começa.',
    "Desarma": 'abre mão de defesas, relaxa.',
    "arduo": 'que cansa',
    "infinda": 'que nao pode ter fim ou nao parece ter fim',
    "tranfiguro": 'fazer mudar ou mudar figura',
    "Hereges": 'que ou quem professa doutrina contraria ao que foi estabelecido pela igreja como dogma',
    "Hortênsia": 'especie de flores',
    "Estame": 'orgao masculino das flores',
    "singelo": 'simples, unico',
    "camelia": 'especie de planta',
    "Florescer": 'desabrochar, crescer.',
    "Desejo":'No poema, a palavra "desejo" está associada à paixão e ao impulso emocional que a música desperta.',
    "Quase quebro o salto":'A expressão "Quase quebro o salto" no poema transmite uma imagem de espontaneidade e intensidade durante a dança.',
    "Frouxos":'soltos, enfraquecidos.',
    "Permear":'espalhar-se por, infiltrar-se.',
    "Breviedade":'curta duração, fugacidade.',
    "Degradação":'declínio, perda de qualidade.',
    "Gentil":'bondoso, amável, afetuoso.',
    "Átomo":'partícula básica e indivisível que compõe todas as coisas no universo.',
    "Nêutrons":'partículas subatômicas sem carga elétrica, presentes no núcleo de um átomo.',
    "Prótons":'partículas subatômicas com carga positiva, também presentes no núcleo de um átomo.',
    "Elétrons":'partículas subatômicas com carga negativa que orbitam ao redor do núcleo do átomo.',
    "Florido":'coberto ou adornado por flores, geralmente representando beleza e vitalidade.',
    "Tranquilidade":'estado de calma, paz e sossego.',
    "Apreçar":'estimar',
    "Dissabor":'sentimento de tristeza causado por problemas; magoa, aflição',
    "Marroaz":'antigo navio a vela, menor que a nau, us. na costa da Arábia e do mar Vermelho; marruaz.',
    "Macula": 'ausencia de perfeição, defeito, mancha',
    "Paraíso":'lugar ou estado idealizado de felicidade e perfeição; em algumas crenças, o destino dos justos após a morte.',
    "Convencida":'que foi levada a acreditar ou a aceitar algo, convencida de uma ideia ou opinião.',
    "Eclética":'Representa uma diversidade de gostos musicais e sentimentos. A pessoa que fala no poema tem preferência por diferentes estilos de música.',
    "Afeto":'Sentimento de carinho, simpatia ou amor por alguém ou algo.',
    "Tempestivas":'Relacionado a "tempestade"; pode significar "forte", "intenso" ou algo feito de forma rápida e impulsiva, geralmente usado para descrever ações ou eventos que ocorrem de maneira intempestiva ou turbulenta.',
    "Ventanias":'Ventos fortes e contínuos, normalmente mais intensos que uma brisa, podendo ser causadores de distúrbios atmosféricos ou alterações no ambiente.',
    "Vividos":'Forma do verbo "viver", referindo-se a algo que já foi experienciado ou aproveitado, relacionado a memórias ou experiências passadas.',
    "Malferido":'É uma palavra que significa "ferido" ou "machucado". Ela é uma forma mais poética e intensa de expressar que algo está em sofrimento ou danificado, tanto fisicamente quanto emocionalmente. No poema, "olhos malferidos" sugere que os olhos do poeta estão marcados pela dor e pela tristeza, como consequência da perda de sua amada, Carolina.',
    "Aventura erguida":'Expressão que sugere uma experiência desafiadora ou empolgante que foi iniciada ou construída, com tom de conquista ou exploração.',
    "Lida":'É um termo que se refere ao trabalho árduo ou às dificuldades da vida cotidiana. No contexto do poema, "toda humana lida" pode ser interpretado como as dificuldades e desafios que as pessoas enfrentam ao longo de suas vidas. No caso do poema de Machado de Assis, isso faz referência às adversidades que o casal passou juntos, mas que não afetaram o amor e a união deles.',
    "Pulsa-lhe":'-Forma do verbo "pulsar", significa "bate-lhe" ou "lateja nele", geralmente usada para descrever um movimento ou ritmo forte e constante.',
    "Leito derradeiro": '-É uma maneira poética de se referir ao lugar onde alguém é enterrado, ou seja, o túmulo. "Leito" normalmente significa uma cama ou um lugar para descansar, e "derradeiro" quer dizer último. Assim, o "leito derradeiro" representa o último lugar de descanso de uma pessoa, após sua morte. É uma expressão usada para falar de forma respeitosa sobre o local onde alguém foi sepultado.',
    "Ao comprido": "Estendido de forma horizontal; deitar-se “ao comprido” significa deitar-se com o corpo totalmente esticado.",
    "Goza-lo": 'Aproveitar intensamente, desfrutar de algo; o poeta fala de "gozar o calor" em um sentido de experimentá-lo profundamente.',
    "Despeito": "Sentimento de rancor ou desgosto que leva alguém a agir de maneira vingativa ou maldosa, geralmente motivado por ciúmes ou frustração.",
    "Alvissareiro": "Algo que traz boas notícias ou é promissor; relacionado a um futuro positivo ou de alegria.",
    "Angústia": "Sensação de grande aflição, apreensão ou sofrimento emocional, geralmente associada a preocupação ou medo intenso.",
    "Monótona": "Algo que é repetitivo, sem variação ou novidade, causando tédio ou falta de interesse devido à falta de diversidade."
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <section id="inicio" className="w-full h-auto p-4 md:p-8 bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Poemas</h1>
      </section>
      <br />


        <div className="max-w-4xl w-full text-center space-y-8">


        <div>
          <h1 className="text-3xl font-bold mb-4">Playlist - Isadora Souza</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Quando estou triste{'\n'}
          Melodias cantam meu coração {'\n'}
          Melancolia não é minha praia{'\n'}
          Mas já chorei ouvindo uma canção {'\n'}
          {'\n'}
          Quando a brisa da paixão {'\n'}
          Decide fazer parte do ar que respiro{'\n'}
          Não tem jeito{'\n'}
          É "pop" e "blues" que explicam meu desejo{'\n'}
          {'\n'}
          A raiva vem e vai{'\n'}
          O "rock" externa por mim{'\n'}
          Solos de guitarra não conquistam todo mundo{'\n'}
          Mas com certeza dominaram minha mente{'\n'}
          {'\n'}
          E, pra alegrar a vida{'\n'}
          <span onClick={(e) => toggleTooltip("Quase quebro o salto", e)} className="cursor-pointer text-blue-500">Quase quebro o salto</span> nessa dança{'\n'}
          E quem se importa?{'\n'}
          Aqui tem o samba e pagode que o povo ama{'\n'}
          {'\n'}
          Depois dessa{'\n'}
          Não dá pra diferenciar {'\n'}
          Se isso é ser <span onClick={(e) => toggleTooltip("Eclética", e)} className="cursor-pointer text-blue-500">eclética</span>{'\n'}
          Ou só ser bipolar.{'\n'}
          </h2>
          <br></br>
        </div>






        <div>
          <h1 className="text-3xl font-bold mb-4">O Guardador de Rebanhos - Fernando Pessoa</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Sou um guardador de rebanhos. {'\n'}
          O rebanho é os meus pensamentos{'\n'}
          E os meus pensamentos são todos sensações.{'\n'}
          Penso com os olhos e com os ouvidos{'\n'}
          E com as mãos e os pés{'\n'}
          E com o nariz e a boca.{'\n'}
          {'\n'}
          Pensar uma flor é <span onClick={(e) => toggleTooltip("Dissabor", e)} className="cursor-pointer text-blue-500">vê-la</span> e cheirá-la{'\n'}
          E comer um fruto é saber-lhe o sentido.{'\n'}
          {'\n'}
          Por isso quando num dia de calor{'\n'}
          Me sinto triste de <span onClick={(e) => toggleTooltip("Goza-lo", e)} className="cursor-pointer text-blue-500">gozá-lo</span> tanto,{'\n'}
          E me deito <span onClick={(e) => toggleTooltip("Ao comprido", e)} className="cursor-pointer text-blue-500">ao comprido</span> na erva,{'\n'}
          E fecho os olhos quentes,{'\n'}
          Sinto todo o meu corpo deitado na realidade,{'\n'}
          Sei a verdade e sou feliz.{'\n'}
          </h2>
          <br></br>
        </div>







        <div>
          <h1 className="text-3xl font-bold mb-4">Alma - Paola Kroll</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Durante a breve aurora me encontro em meus sonhos, pronta para um novo recomeço{'\n'}
          Com a nova aurora que criarei, meu pé decide seguir em frente.{'\n'}
          {'\n'}
          A dor consome minha espera, aborrece minha alma, entristece meu coração, silencia meus sentimentos, abre as caixinhas que guardei com tanto apreço. Novamente me perco nos caminhos de minha mente.{'\n'}
          {'\n'}
          Desculpe, dessa vez ninguém poderá me salvar {'\n'}
          Sinto muito, dessa vez não há o que fazer {'\n'}
          Perdão, dessa vez não há palavras que me façam desistir.{'\n'}
          {'\n'}
          Minha alma me consome, minha alma é dor e  mesmo que eu desista, Eu não desistirei {'\n'}
          E novamente, minha alma se aborrece {'\n'}
          O ciclo se encerra, eu imploro para não cair, a minha misericórdia faz eu me jogar.{'\n'}
          {'\n'}
          A alma bate forte, decidindo se afogar em um oceano de <span onClick={(e) => toggleTooltip("Dissabor", e)} className="cursor-pointer text-blue-500">dissabores</span>.{'\n'}
          {'\n'}
          Sou pesares, sou <span onClick={(e) => toggleTooltip("Dissabor", e)} className="cursor-pointer text-blue-500">dissabores</span>, sou <span onClick={(e) => toggleTooltip("Macula", e)} className="cursor-pointer text-blue-500">máculas</span> e permanecerei em minha fúria típica.{'\n'}
          </h2>
          <br></br>
        </div>






        <div>
          <h1 className="text-3xl font-bold mb-4">Seu olhar - Paola Kroll</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Eu gosto do seus olhos, seu olhar é <span onClick={(e) => toggleTooltip("Gentil", e)} className="cursor-pointer text-blue-500">gentil</span>, seu sorriso me aquece, poderíamos sorrir juntos e sermos quentes. {'\n'}
          {'\n'}
          Eu gosto do seu rosto, de cada detalhe, cada célula, cada <span onClick={(e) => toggleTooltip("Átomo", e)} className="cursor-pointer text-blue-500">átomo</span>, <span onClick={(e) => toggleTooltip("Nêutrons", e)} className="cursor-pointer text-blue-500">nêutrons</span>, <span onClick={(e) => toggleTooltip("Prótons", e)} className="cursor-pointer text-blue-500">prótons</span> e <span onClick={(e) => toggleTooltip("Elétrons", e)} className="cursor-pointer text-blue-500">elétrons</span>, poderia olhar o infinito de dias, cada característica sua.{'\n'}
          {'\n'}
          Eu amo seu olhar, de todos os possíveis olhares já vistos por mim, o seu soa como um campo <span onClick={(e) => toggleTooltip("Florido", e)} className="cursor-pointer text-blue-500">florido</span> completo de <span onClick={(e) => toggleTooltip("Tranquilidade", e)} className="cursor-pointer text-blue-500">tranquilidade</span>. Assim como o oposto de “A Divina Comédia” tenho explorado o <span onClick={(e) => toggleTooltip("Paraíso", e)} className="cursor-pointer text-blue-500">paraíso</span> em seus olhos. {'\n'}
          {'\n'}
          Não tenho parado de sorrir, não consigo. Você tem sido a melhor volta ao mundo que tenho feito. {'\n'}
          {'\n'}
          Tenho me sentido uma garotinha de 9 anos apaixonada e uma mulher de meia idade que estava <span onClick={(e) => toggleTooltip("Convencida", e)} className="cursor-pointer text-blue-500">convencida</span> de morrer sozinha, quando encontrou o amor de sua vida. {'\n'}
          {'\n'}
          Você me faz pensar que há uma chance no amor, mesmo em meio a tantos problemas. Você me tranquilizou.{'\n'}
          </h2>
          <br></br>
        </div>









        <div>
          <h1 className="text-3xl font-bold mb-4">Lua - Paola Kroll</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Estou indo. Ignorando a constante <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span> que me aborrece dia e noite. A pressão que se faz após o brilho de uma jovem vida desaparecer. Os sonhos de uma jovem garota se tornarem <span onClick={(e) => toggleTooltip("Frouxos", e)} className="cursor-pointer text-blue-500">frouxos</span>. {'\n'}
          {'\n'}
          Oh, Lua, quando poderei lhe anunciar meu novo reencontro com o passado e o futuro. Das diversas vezes que senti saudades, nenhuma se pôs fim. {'\n'}
          {'\n'}
          Oh, Lua, quando poderei lhe anunciar o fim a <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span> finita que permeia acontecimentos do passado. Das diversas viagens a Lua, quando cheguei sem angústias? {'\n'}
          {'\n'}
          Estou indo. Combatendo a infinita <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span> que me levou ao amanhecer de um céu nublado e de clima frio. Ao pensar em uma nova forma de viver, talvez não haja uma nova ou talvez eu não queira uma nova. {'\n'}
          {'\n'}
          Oh, Lua, portanto, sentirei falta da constante <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span>, finita e bela <span onClick={(e) => toggleTooltip("Degradação", e)} className="cursor-pointer text-blue-500">degradação</span> de meus sentimentos puros, ao me tornar ar, fogo, terra e água. Das diversas tentativas de viver, quando entendi o desfecho óbvio da <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span> que me aborrece dia e noite. A pressão que se faz após o brilho de uma jovem vida desaparecer. Os sonhos de uma jovem garota se tornarem <span onClick={(e) => toggleTooltip("Breviedade", e)} className="cursor-pointer text-blue-500">breviedade</span> da vida?{'\n'}
          </h2>
          <br></br>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Das flores - Maria Eduarda</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Ao maior auto dos amantes,  {'\n'}
          tu recordas o que conversa amor.  {'\n'}
          {'\n'}
          Nenhum árduo caminho segue-se sem tuas memórias,  {'\n'}
          nem as águas deste rio fluem sem marcar,{'\n'}
          as águas <span onClick={(e) => toggleTooltip("infinda", e)} className="cursor-pointer text-blue-500">infindas</span>. {'\n'}
          {'\n'}
          - Te transfiguro a rosas brancas.  {'\n'}
          {'\n'}
          <span onClick={(e) => toggleTooltip("Hereges", e)} className="cursor-pointer text-blue-500">Hereges</span> fomos apaixonados,  {'\n'}
          facilmente levados à loucura,  {'\n'}
          hesitamos em vossos fracassos  {'\n'}
          e ficamos assim por deixar.  {'\n'}
          {'\n'}
          Cercados das linguagens,  {'\n'}
          te agradam as palavras doces,  {'\n'}
          e o toque alenta tuas cicatrizes,  {'\n'}
          que por fim tinham de sangrar.  {'\n'}
          {'\n'}
          Me agrada esse tempo um ao lado do outro,  {'\n'}
          apenas poucas palavras me bastam;  {'\n'}
          o silêncio diz algo que explode a alma,  {'\n'}
          e meu <span onClick={(e) => toggleTooltip("Desejo", e)} className="cursor-pointer text-blue-500">desejo</span> faz dos céus um grão.  {'\n'}
          {'\n'}
          - Te transfiguro a <span onClick={(e) => toggleTooltip("Hortênsia", e)} className="cursor-pointer text-blue-500">hortênsias</span>.  {'\n'}
          {'\n'}
          Sua alma de <span onClick={(e) => toggleTooltip("Estame", e)} className="cursor-pointer text-blue-500">estame</span> e minha alma de carpelo,  {'\n'}
          algo é certo, existimos.  {'\n'}
          Queres que seja santo,  {'\n'}
          quem quisermos seremos,  {'\n'}
          (me agrada que sejamos crianças),  {'\n'}
          porém agora somos jovens.  {'\n'}
          {'\n'}
          Tudo que me fizestes,  {'\n'}
          tudo que lhe fiz imaginar,  {'\n'}
          (crianças nos tornaríamos),  {'\n'}
          momentos <span onClick={(e) => toggleTooltip("singelo", e)} className="cursor-pointer text-blue-500">singelos</span>, de memórias reais.  {'\n'}
          {'\n'}
          (Ainda não compreendidas, mas perceptíveis).  {'\n'}
          {'\n'}
          O tempo que passa e o sentimento que se impregna  {'\n'}
          da saudade que rasga cada vez que se abre  {'\n'}
          a cicatriz que deixaste, e me deixaste.  {'\n'}
          {'\n'}
          - Te transfiguro as <span onClick={(e) => toggleTooltip("camelia", e)} className="cursor-pointer text-blue-500">camélias</span>.{'\n'}
          </h2>
          <br></br>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Trecho de "A hora da estrela" - Clarice Lispector</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          "Sim, minha força está na solidão. Não tenho medo nem de chuvas <span onClick={(e) => toggleTooltip("Tempestivas", e)} className="cursor-pointer text-blue-500">tempestivas</span>, nem das grandes <span onClick={(e) => toggleTooltip("Ventanias", e)} className="cursor-pointer text-blue-500">ventanias</span> soltas, pois eu também sou o escuro da noite."
          </h2>
          <br></br>
        </div>




        <div>
          <h1 className="text-3xl font-bold mb-4">Educação - Paola Kroll</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Educação, paz instrumental {'\n'}
          Aprendizagem, caminho direto {'\n'}
          Manutenção da vida, educacional {'\n'}
          Busca pela compreensão, incompleto {'\n'}
          {'\n'}
          Importância amorosa, desenvolvimento {'\n'}
          Lutando contra injustiças, desmentindo {'\n'}
          Escadinhas corridas, sobrevivendo {'\n'}
          Indo, rindo, chorando e gritando {'\n'}
          {'\n'}
          Vozes me clamam por vivências {'\n'}
          Descobrindo o mundo, belo mundo {'\n'}
          Meu grande entendimento, inocência {'\n'}
          Entendo, compreendo e o belo submundo {'\n'}
          {'\n'}
          A paz necessita da paz instrumental {'\n'}
          A paz necessita do caminho direto {'\n'}
          A paz necessita da presença do conhecimento {'\n'}
          A paz necessita do completo {'\n'}
          {'\n'}
          Vozes falam sobre a educação {'\n'}
          A educação necessita da paz {'\n'}
          A educação necessita da calma {'\n'}
          A educação necessita do equilíbrio {'\n'}
          {'\n'}
          A educação necessita da paz {'\n'}
          A paz necessita da educação {'\n'}
          Buscando a paz por meio do aprendizado {'\n'}
          O aprendizado nadando por um <span onClick={(e) => toggleTooltip("Marroaz", e)} className="cursor-pointer text-blue-500">marroaz</span> {'\n'}
          </h2> 
          <br></br>
        </div>











        <div>
          <h1 className="text-3xl font-bold mb-4">Carolina - Machado de Assis</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
            Querida, ao pé do leito derradeiro, <span onClick={(e) => toggleTooltip("Rebentar-se", e)} className="cursor-pointer text-blue-500">Rebentar-se</span>, {'\n'}
            Em que descansas dessa longa vida, {'\n'}
            Aqui venho e virei, pobre querida, {'\n'}
            Trazer-te o coração do companheiro. {'\n'}
            {'\n'}
            Pulsa-lhe aquele afeto verdadeiro {'\n'}
            Que, a <span onClick={(e) => toggleTooltip("Despeito", e)} className="cursor-pointer text-blue-500">despeito</span> de toda humana lida, {'\n'}
            Fez nossa vida uma aventura erguida {'\n'}
            Às regiões de um sonho <span onClick={(e) => toggleTooltip("Alvissareiro", e)} className="cursor-pointer text-blue-500">alvissareiro</span>. {'\n'}
            {'\n'}
            Trago-te flores — restos arrancados {'\n'}
            Da terra que nos viu passar unidos {'\n'}
            E ora mortos nos deixa e separados. {'\n'}
            {'\n'}
            Que eu, se tenho nos olhos malferidos {'\n'}
            Pensamentos de vida formulados, {'\n'}
            São pensamentos idos e vividos. {'\n'}
          </h2>
          <br></br>
        </div>






        <div>
          <h1 className="text-3xl font-bold mb-4">Angústia - Isadora Souza</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
            O tempo não passa {'\n'}
            Os minutos são horas {'\n'}
            O relógio já nem bate mais {'\n'}
            {'\n'}
            A <span onClick={(e) => toggleTooltip("Ansiedade", e)} className="cursor-pointer text-blue-500">ansiedade</span> pelo que nunca chega {'\n'}
            A <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span> por nunca acontecer {'\n'}
            A vida parece ter virado <span onClick={(e) => toggleTooltip("Monótona", e)} className="cursor-pointer text-blue-500">monótona</span> {'\n'}
            {'\n'}
            Já se foram os dias {'\n'}
            De brilho no olhar {'\n'}
            Pelo menos de lá pra cá {'\n'}
            Não esqueci como amar {'\n'}
            {'\n'}
            E então, o tempo passou junto a solidão {'\n'}
            O ano já tá quase acabando {'\n'}
            Só faltou o ponteiro voar {'\n'}
            {'\n'}
            O que tinha pra chegar, chegou e aconteceu {'\n'}
            Mas a <span onClick={(e) => toggleTooltip("Angústia", e)} className="cursor-pointer text-blue-500">angústia</span> de ter e o tédio de possuir {'\n'}
            Fez pouco me importar com o que perdi {'\n'}
            Já que a própria vontade de ter algo é mal {'\n'}
            Decidi me libertar. {'\n'}
          </h2>
          <br></br>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Paz e mais paz - Paola Kroll</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
          Paz é o silêncio após a tempestade. É a suavidade dos olhos que já se fecham, ou que sem medo. É então, o voo de uma borboleta atravessando a manhã, como se soubesse que o mundo a observa em cada detalhe. {'\n'}
          {'\n'}
          Paz é <span onClick={(e) => toggleTooltip("Ordinária", e)} className="cursor-pointer text-blue-500">ordinária</span>, paz se cria, paz se perde.{'\n'}
          {'\n'}
          A paz toca em uma brisa leve que passa no rosto e se desfaz, é o riso solto de quem encontrou abrigo. São as luzes do Sol que passam pela cortina ao <span onClick={(e) => toggleTooltip("Amanhecer", e)} className="cursor-pointer text-blue-500">amanhecer</span>. {'\n'}
          {'\n'}
          Paz <span onClick={(e) => toggleTooltip("Completa", e)} className="cursor-pointer text-blue-500">completa</span>, paz finaliza, paz <span onClick={(e) => toggleTooltip("Acaricia", e)} className="cursor-pointer text-blue-500">acaricia</span>. 
          {'\n'}
          Paz é um campo colorido, de cada flor crescendo, onde todas as diferentes cores e cheiros, vivem sem competições. {'\n'}
          {'\n'}
          Paz, paz, paz é tudo.{'\n'}
          {'\n'}
          É a música do rio e da floresta, aceitando as pedras, as curvas, as quedas, os ventos, os animais, como uma promessa de paz, depois de cada noite, haverá um novo <span onClick={(e) => toggleTooltip("Amanhecer", e)} className="cursor-pointer text-blue-500">amanhecer</span>.{'\n'}
          {'\n'}
          Paz se <span onClick={(e) => toggleTooltip("Origina", e)} className="cursor-pointer text-blue-500">origina</span>, paz se torna, paz se encontra.{'\n'}
          {'\n'}
          Paz é onde a alma se <span onClick={(e) => toggleTooltip("Desarma", e)} className="cursor-pointer text-blue-500">desarma</span>. É saber que há tempo para <span onClick={(e) => toggleTooltip("Florescer", e)} className="cursor-pointer text-blue-500">florescer</span>, que há espaço para o amor. Paz é o instante em que a vida se acalma e encontra sentido no simples, o ser.{'\n'}
          {'\n'}
          Paz. A Paz. Paz.{'\n'}
          </h2>
          <br></br>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Lembrança de Morrer - Alvares de Azevedo</h1>
          <h2 className="text-lg leading-relaxed whitespace-pre-line">
            Quando em meu peito <span onClick={(e) => toggleTooltip("Rebentar-se", e)} className="cursor-pointer text-blue-500">rebentar-se</span> a fibra {'\n'}
            Que o espírito enlaça à dor <span onClick={(e) => toggleTooltip("Vivente", e)} className="cursor-pointer text-blue-500">vivente</span>, {'\n'}
            Não derramem por mim nem uma lágrima {'\n'}
            Em pálpebra demente. {'\n'}
            {'\n'}
            E nem <span onClick={(e) => toggleTooltip("Desfolhem", e)} className="cursor-pointer text-blue-500">desfolhem</span> na matéria <span onClick={(e) => toggleTooltip("Impura", e)} className="cursor-pointer text-blue-500">impura</span> {'\n'}
            A flor do vale que adormece ao vento: {'\n'}
            Não quero que uma nota de alegria {'\n'}
            Se cale por meu triste <span onClick={(e) => toggleTooltip("Passamento", e)} className="cursor-pointer text-blue-500">passamento</span>. {'\n'}
            {'\n'}
            Eu deixo a vida como deixa o tédio {'\n'}
            Do deserto, o <span onClick={(e) => toggleTooltip("Poento", e)} className="cursor-pointer text-blue-500">poento</span> caminheiro {'\n'}
            — Como as horas de um longo <span onClick={(e) => toggleTooltip("Pesadelo", e)} className="cursor-pointer text-blue-500">pesadelo</span> {'\n'}
            Que se desfaz ao <span onClick={(e) => toggleTooltip("Dobre", e)} className="cursor-pointer text-blue-500">dobre</span> de um sineiro; {'\n'}
            {'\n'}
            Como o <span onClick={(e) => toggleTooltip("Desterro", e)} className="cursor-pointer text-blue-500">desterro</span> de minh'alma errante,{'\n'}
            Onde fogo insensato a consumia:{'\n'}
            Só levo uma <span onClick={(e) => toggleTooltip("Saudade", e)} className="cursor-pointer text-blue-500">despeito</span> — é desses tempos{'\n'}
            Que amorosa <span onClick={(e) => toggleTooltip("Ilusão", e)} className="cursor-pointer text-blue-500">ilusão</span> embelecia.{'\n'}
            {'\n'}
            Só levo uma <span onClick={(e) => toggleTooltip("Saudade", e)} className="cursor-pointer text-blue-500">saudade</span> — é dessas sombras{'\n'}
            Que eu sentia <span onClick={(e) => toggleTooltip("Velar", e)} className="cursor-pointer text-blue-500">velar</span> nas noites minhas...{'\n'}
            De ti, ó minha mãe, pobre coitada{'\n'}
            Que por minha tristeza te definhas!{'\n'}
            {'\n'}
            De meu pai... de meus únicos amigos,{'\n'}
            Poucos — bem poucos — e que não zombavam{'\n'}
            Quando, em noite de febre <span onClick={(e) => toggleTooltip("Endoudecido", e)} className="cursor-pointer text-blue-500">endoudecido</span>,{'\n'}
            Minhas pálidas crenças duvidavam.{'\n'}
            {'\n'}
            Se uma lágrima as pálpebras me inunda,{'\n'}
            Se um suspiro nos <span onClick={(e) => toggleTooltip("Seios", e)} className="cursor-pointer text-blue-500">seios</span> treme ainda{'\n'}
            É pela virgem que sonhei... que nunca{'\n'}
            Aos lábios me encostou a face linda!{'\n'}
            {'\n'}
            Só tu à mocidade sonhadora{'\n'}
            Do pálido poeta deste flores...{'\n'}
            Se viveu, foi por ti! e de esperança{'\n'}
            De na vida gozar de teus amores.{'\n'}
            {'\n'}
            Beijarei a verdade santa e nua,{'\n'}
            Verei <span onClick={(e) => toggleTooltip("Cristalizar-se", e)} className="cursor-pointer text-blue-500">cristalizar-se</span> o sonho amigo....{'\n'}
            Ó minha virgem dos <span onClick={(e) => toggleTooltip("Errante", e)} className="cursor-pointer text-blue-500">erantes</span> sonhos,{'\n'}
            Filha do céu, eu vou amar contigo!{'\n'}
            {'\n'}
            Descansem o meu leito solitário{'\n'}
            Na floresta dos homens esquecida,{'\n'}
            À sombra de uma cruz, e escrevam nelas{'\n'}
            — Foi poeta — sonhou — e amou na vida.—{'\n'}
            {'\n'}
            Sombras do vale, noites da montanha{'\n'}
            Que minh'alma cantou e amava tanto,{'\n'}
            <span onClick={(e) => toggleTooltip("Protegei", e)} className="cursor-pointer text-blue-500">Protegei</span> o meu corpo abandonado,{'\n'}
            E no silêncio <span onClick={(e) => toggleTooltip("Derramai", e)} className="cursor-pointer text-blue-500">derramai-lhe</span> canto!{'\n'}
            {'\n'}
            Mas quando <span onClick={(e) => toggleTooltip("Preludia", e)} className="cursor-pointer text-blue-500">preludia</span> ave d'aurora{'\n'}
            E quando à meia-noite o céu repousa,{'\n'}
            Arvoredos do bosque, abri os ramos...{'\n'}
            Deixai a lua <span onClick={(e) => toggleTooltip("Prantear", e)} className="cursor-pointer text-blue-500">prantear-me</span> a <span onClick={(e) => toggleTooltip("Lousa", e)} className="cursor-pointer text-blue-500">lousa</span>!{'\n'}
          </h2>
          <br></br><br></br>
      <Link to="/">
  <div className="flex justify-center items-center">
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
      Voltar para a página inicial
    </button>
  </div>
</Link>
        </div>

        {/* Exibe o tooltip quando a palavra for clicada */}
        {selectedWord && (
          <div
            className="absolute bg-black text-white text-sm rounded p-2"
            style={{ top: position.top, left: position.left, zIndex: 100 }}
          >
            {wordDefinitions[selectedWord]}
          </div>
        )}
      </div>
    </div>
  );
};

export default Poema;
