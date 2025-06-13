# Objetivo da aula
Ensinar os fundamentos de programação usando HTML e JavaScript de forma simples e prática!

## 1. Abertura (5min)
Bom dia, pessoal! Meu nome é Wellington Emanuel, mas podem me chamar de Emanuel. 😄

Antes de começarmos, quero saber:
👉 Alguém aqui já ouviu falar sobre programação?
👉 E alguém sabe me dizer o que é programar?

(Deixe os alunos responderem por 1 ou 2 minutos)

Explicação:
Programar é dar instruções para o computador fazer alguma coisa.
Essas instruções são escritas em uma linguagem que o computador entende, como o HTML ou o JavaScript, que vamos aprender hoje.

Com programação, dá pra criar muita coisa legal:

Sites (como o YouTube ou o Instagram)

Aplicativos de celular

Jogos

Robôs que se movem sozinhos

E até controlar lâmpadas e sensores em casas inteligentes!

Ou seja, programação é como ensinar o computador a trabalhar pra você!

## 2. Criar uma página simples com HTML (15 min)
Vamos criar um página de um site simples, mas antes 
para criar um site precisamos de um local para colocar 
nossos codigos, para isso temos hoje varios editores de 
código, vamos utilizar aqui um editor chamado Visual 
Studio Code, ele é muito bom e pratico para começar com 
os nossos codigos, mas a gente consegue até criar uma página com o bloco de notas, alguém aqui conhece o bloco de notas? pois é conseguimos também utilizar ele para programar nossos codigos, mas iremos focar no visual studio code, mais conhecido como vs code.

antes de começar vou explicar o que é o HTML no ingles é HyperText markup language, ja no portugues é linguagem de marcação, ela serve para a gente construir paginas web. o html é constituida com tags, o que são tags? tags é esse elemento aqui, que contem uma abertura e um fechamento <tag> </tag>, algumas tags não seguem esse formato de abertura e fechamento, pois não é necessario como por exemplo a tag <input>, a tag input faz com que voce consiga receber entradas de dados do teclado, como as letras, numeros e simbolos. agora a estrutura html tem algumas informações importantes, apesar das tags serem ingles é bem facil de entender, no editor de codigo vamos começar o codigo utilizando uma tag que nao tem fechamento, ela começa assim: <DOCTYPE html> o que essa tag faz? ela diz ao navegador que esse documento aqui é um documento html, depois vamos colocar <html> e </html>, dentro dessas tags vamos colocar a parte da cabeça da pagina e a outra será o corpo, a parte da cabeça vai se chamar de head em ingles, vamos abrir a tag <head> e fechar </head>, agora dentro da cabeça vamos dizer ao navegador o titulo da nossa pagina, aquele que fica la no topo, no ingles é title, vamos abrir e fechar o title e colocar o nome dentro das tags, Aprendendo HTML, e um detalhe também que o navegador deve saber é que o nosso texto aqui é em português, o que significa que tem acentuações, então vamos colocar um tag chamada meta com um atributo que é uma fala da tag dizendo que essa pagina quer que as letras tenham acentuações, vamos utilizar o charset="UTF8", isso faz com que a página codifique as letras nesse formato que é UTF8 que é dar de ver acentuações, agora vamos para o corpo que chamamos de body, no corpo conseguimos colocar todas as nossas ideias para que a gente consiga visualizar no navegador, vamos ver isso na pratica, vamos criar um texto no formato de titulo, vamos colocar uma tag h1 com abertura e fechamento, dentro vamos colocar uma palavra qualquer, uma que gostamos muito na programação é a palavra olá mundo, em ingles é hello world, vamos colocar ela, <h1>Olá, mundo!</h1>, assim conseguimos criar uma pagina web simples, (ver se todos conseguiram criar).

## 3. Aprendendo a manipular a nossa pagina com JS
Agora vamos falar sobre o Javascript é uma linguagem de programação de script, ela é principalmente utilizada em criar paginas web interativas, conseguimos deixar elemntos do nosso html mais animado e legal para o usuário, conseguimos até criar um jogo no navegador com javascript, nesse momento vamos manipular o nosso site que fizemos, existem algumas maneiras de utilizar o javascript na nossa pagina, uma delas que vamos utilizar aqui é dentro da nossa pagina que as tags script, <script> </script>, dentro dessas tags que vamos programar, vamos fazer com que uma lampada acenda e apague com o nosso codigo, voces vao entrar no codido que deixei ai separado, o nome é lampada.html, vamos acessar o codigo e vamos ver que só tem a parte html, vamos fazer com que quando clicarmos no botão ligar acenda a lampada e quando clicarmos no botão apagar, apage a lampada, para isso vamos utilizar alguns comando, primeiro vamos criar uma variavel, mas o que exatamente é uma variavel, vamos olhar aqui na tela, uma variavel é como se voce estivesse um armario, e nesse armario voces conseguem ver que existem varios espaços, nesses espaços a gente consegue colocar alguma coisa, um copo, uma colher, um prato, um caderno e etc, e é assim que funciona no computador, ele tem varios espaços de memoria que podemos colocar alguma coisa. agora que sabemos o que é uma variavel vamos armazena o elemento button, que está no html, e precisamos entrar ele dentro de varias tags, para isso vamos adicionar um identificador, que vamos chamar de id, assim vamos localizar o elemento button, vamos adicionar junto com o texto button o id="" e entre aspas vamos colocar o nome que queremos chamar ele, vamos colocar botaoAcender, agora no js vamos obter esse elemento button, criamos a variavel e vamos dizer assim com comandos, document.getElementById() esse comando é o mesmo que dizer assim, neste documento eu quero buscar o elemento com o id botaoAcender, e dentro do getElementById("botaoAcender") vamos colocar o id do botão, agora temos o nosso botão armazenado em uma variavel, agora vamos fazer o seguindo, vamos dizer em forma de codigo que queremos que ao clicar no botão faça algo, para fazer isso vamos utilizar um codigo que ativo um evento de click, vamos colocar assim: addEventListenner() adiconando um evento no botao, agora vamos dizer que o evento é de click, vamos colocar assim, addEventListenner('click', function ()  {
    // função para executar o click
})
e vamos criar uma função para colocarmos nosso codigo que quando o botao clicar vai executar,
vamos colocar que queremos acender a lampada, vamos fazer a mesma coisa com o botão que colocamos o id, vamos fazer para a lampada, let lampada = document.getElementById("lampada");
dentro da função do clique vamos colocar assim, lampada.src = 'lampada_ligada.png' vamos dizer a variavel lampada que vamos mudar a imagem colocando outra para substituir ela, agora vamos clicar e ver o que vai acontecer, e agora? ja acabmos? não, por que a nossa tocha só acende, ela nao apaga, vamos ter que criar uma função para o botão apagar, para apagar vamos fazer a mesma forma, vamos criar um evento para o botão, e vamos dizer que o evento é de click e vamos e vamos dar a criar uma função que queremos apagar a tocha, agora vou deixar essa tarefa com vocês, façam a tocha apagar, vou dar 5min para fazerem, depois veremos o codigo pra ver se está certo, acabou o tempo, quem aqui conseguiu? mostrar o codigo de apagar a tocha, 