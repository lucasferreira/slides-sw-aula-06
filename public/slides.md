name: capa

.capa-titulo[

# Soluções WEB

]

.capa-subtitulo[

### Prof. Lucas Ferreira

]

---

class: center, middle
count: false

# Frameworks de Interação: React e Angular _(e Vue.js)_

---

## SPA - Single Page Applications

-   Aplicações de Internet Rica (RIA)

--

-   Aplicações completas, desenvolvidas _(normalmente)_ em JavaScript, que funcionam quase como se estivessem sendo executadas nativamente no desktop

--

-   Aplicações modernas que necessitam de uma performance elevada com UIs fluídas

--

-   Quando mudamos de links ou seções em um app SPA, a mudança é quase instantânea, não existe load time complexo

--

-   Porém podemos ter um load time maior quando abrimos pela primeira vez _(maior payload)_

--

-   Objetiva evitar o recarregamento da aplicação em cada mudança de tela e também diminuir a quantidade de requisições ao servidor

--

-   O Gmail é um exemplo óbvio de uma SPA que usamos frequentemente

---

### SPAs x Frameworks de Interação

Dado a necessidade criação de interfaces do usuário _(UI)_ cada vez mais complexas e escaláveis que devem responder de forma fluída a interação dos usuários, o mercado _(e a comunidade open-source)_ de tecnologia envoluiram ao ponto da criação de frameworks e bibliotecas poderosas para facilitar o desenvolvimento destas UIs.

--

Muitos projetos contribuiram ou contribuem até hoje para esses processos, como: _jQuery, Backbone.js, Ember.js, Knockout.js, AngularJS, React, Angular e Vue.js_.

--

Não é mentira a afirmação de que: _"Todo dia um novo framework/biblioteca JS é criado"_.

--

**O pessoal se empolga muito!**

---

### SPAx x Frameworks de Interação

Uma SPA _competente_ deve estar bem resolvida _(junto com sua **stack** de tecnologias)_ quanto a:

-   Comunicação com o Servidor _(AJAX + REST ou GraphQL)_
-   Gerenciamento de Rotas e Mudança de Tela
-   Componentes Visuais Padronizados
-   Templating (HTML e CSS)

Sempre escolha um framework _(ou biblioteca)_ que pode de alguma forma cumprir estes requisitos

---

class: center, middle
count: false

# Frameworks JavaScript mais Populares do Mercado

---

class: center, middle

.center[.fms-img[![Frameworks!](./img/fms.png)]]

---

## REACT

Criado (**2013**) e mantido pelo **Facebook**, Instagram e uma comunidade de desenvolvedores com foco em _open-source_

--

Autodenominada _"Uma **biblioteca** JavaScript para criar interfaces de usuário"_

--

Objetiva facilitar a criação de UIs interativas baseadas em componentes

--

Define-se como uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”

--

Através de componentes encapsulados que gerenciam seu próprio estado, foca na estruturação de _views_ complexas com fácil acesso a controle de estado

--

A lógica do componente é escrita em JavaScript e não em templates

--

O React, sozinho, é destinado principalmente ao desenvolvimento de interfaces de páginas web

--

Também pode ser renderizado no servidor, usando Node, e ser usado para criar aplicações mobile, através do **React Native**.

---

## Components em React

Todo framework/biblioteca JavaScript focado na criação de SPAs, possui alguma padronização para criação de componentes reutilizaveis ao longo de sua aplicação. Um botão que aparece em várias telas, uma caixa de texto, uma janela que se repetem em alguns momentos, listas, seletores, tudo que possa ser reutilizável deve ser concebido como um componente.

Em React temos dois tipos concretos de componentes: **(sub)class based component** e **functional components _(com ou sem hooks)_**.

--

Além dessas estruturas é básico saber como se controla o estado de componentes em React e também dominar o uso de **JSX**.

---

## Components em React

### _(sub)_ class based component

```jsx
class HelloMessage extends React.Component {
    render() {
        return <div>Olá, {this.props.name}!</div>;
    }
}

const appContainer = document.getElementById("hello-example");
ReactDOM.render(<HelloMessage name="Taylor" />, appContainer);
```

--

Este é o tipo mais tradicional e complexo de criação de componentes em React. Percebam que no meio de nossa classe JavaScript temos a inserção direta de **código semelhante ao HTML**, isso é o que chamamos de **JSX**.

--

Criando componentes baseados em classe temos acesso a controle de estado próprio, acesso a propriedades _(top-down)_ e acesso ao _lifecyle_ de eventos de montagem, atualização e desmontagem de componentes em tela.

---

## Components em React

### _(sub)_ class based component

```jsx
class Contador extends React.Component {
    constructor(props) {
        // estado inicial...
        this.state = {
            count: 1,
        };
    }
    incrementarCount() {
        const count = this.state.count; // recuperamos o valor atual
        this.setState({ count: count + 1 }); // setamos o novo valor incrementado
    }
    render() {
        return (
            <div className="meu-contador">
                <h2>
                    Contagem <em>{this.state.count}</em>
                </h2>
                <button type="button" onClick={() => this.incrementarCount()}>
                    Incrementar
                </button>
            </div>
        );
    }
}
```

---

## Components em React

### Functional Components _(sem estado)_

Em React, componentes de função são os mais simples de serem escritos, contém apenas um método render e não possuem seu próprio state _(estado)_.

```jsx
function HelloMessage(props) {
    return <div>Olá, {props.name}!</div>;
}

const appContainer = document.getElementById("hello-example");
ReactDOM.render(<HelloMessage name="Wesley" />, appContainer);
```

---

## Components em React

### Functional Components _(com estado + hooks)_

Com o lançamento da versão **v16.8** do React, components funcionais agora também podem ter seu controle de estado independente, sem a necessidade do uso de classes.

Esta é inclusive a maneira indicada para se trabalhar com React nos dias de hoje.

```jsx
function Contador() {
    const [count, setCount] = React.useState(1);
    const incrementarCount = () => setCount(count + 1);

    return (
        <div className="meu-contador">
            <h2>
                Contagem <em>{count}</em>
            </h2>
            <button type="button" onClick={() => incrementarCount()}>
                Incrementar
            </button>
        </div>
    );
}

const appContainer = document.getElementById("hello-example");
ReactDOM.render(<Contador />, appContainer);
```

---

## Iniciando com React

O React possui uma ferramenta oficial para iniciar um projeto 100% baseado no React chamada **Create React App**.

--

Utilizando esta ferramenta poderemos agilizar as configurações iniciais de projeto, não será necessário configurar o **Webpack** ou **Babel.js** porque o `create-react-app` já fará isso por nós.

--

_PS.: Daqui em diante é altamente recomendado que você tenha Node.js e NPM devidamente instalados em sua máquina_

---

## Iniciando com React

Para criar seu primeiro projeto usando o `create-react-app` basta rodar o comando abaixo:

```bash
npx create-react-app nome-do-meu-projeto
```

--

.center[.cra-img[![CRA!](./img/cra.svg)]]

---

## Iniciando com React

Após criado o projeto nossa estrutura _(recomendada)_ será mais ou menos assim:

```bash
meu-projeto
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

---

### Complementando sua Aplicação React

Como já observado o React se define como _"uma **biblioteca** JavaScript para criar interfaces de usuário"_, logo por ser uma biblioteca nem todas ferramentas necessárias criar sua SPA estarão disponíveis de forma _built-in_ no React.

--

Por sorte e também por tempo amadurecimento do mercado temos diversas ferramendas bacanas disponibilizadas pela comunidade open-source para complementar nossa _stack_ de desenvolvimento em React.

--

| Pacote       | Descrição                                         |
| ------------ | ------------------------------------------------- |
| react-router | Biblioteca declarativa de roteamento para React   |
| jotai        | Gerenciamento de estado avançado em React         |
| axios        | Cliente HTTP amplemente usado em requisições AJAX |

---

class: center, middle

## DEMO TIME 🚀

.center[.gif-img[![Boooom!](./img/brain.gif)]]

---

## Angular

Criado **(2016)** e mantido pela Equipe Angular do Google e por uma comunidade de desenvolvedores open-source

--

Caracterizado como um **framework** de aplicações web vende-se como "uma plataforma completa para criação de aplicações web e mobile."

--

Não confundir com o finado **AngularJS** _(historinha triste)_

--

Atualmente possui uma performance de interação tão boa quanto o React e o Vue.js

--

Também baseado na hierarquia de componentes como o seu principal conceito arquitetônico

--

Porém diferente do React, possui muita lógica baseada em Templates

--

Combina de forma declarativa recursos como templates, injeção de dependencias e ferramental completo e oficial

--

Recomenda-se o uso de **TypeScript** (<https://www.typescriptlang.org>) como linguagem oficial de programação

---

## Criando um projeto com Angular

Assim como o React, o Angular também possui o sua ferramenta oficial de projetos o **Angular CLI**.

Para instalar de forma universal em sua máquina utilize o comando em seu Terminal/Prompt:

```bash
npm install -g @angular/cli
```

--

Após instalado você poderá iniciar seu projeto 100% baseado em Angular com o seguinte comando:

```bash
ng new meu-projeto-angular
```

--

E para _rodar_ seu novo projeto:

```bash
cd meu-projeto-angular
ng serve --open
```

---

## Componentes em Angular

Normalmente um componente Angular é baseado em 3 arquivos:

-   `meu.component.ts` => Lógica / Controlador do Component
-   `meu.component.html` => Template HTML
-   `meu.component.css` => Estilização

--

É possível gerar um novo componente em sua aplicação através do seguinte comando:

```bash
ng generate component meu
```

---

## Componentes em Angular

#### meu.component.ts

```ts
import { Component } from "@angular/core";

@Component({
    selector: "meu-component",
    templateUrl: "./meu.component.html",
    styleUrls: ["./meu.component.css"],
})
export class MeuComponent {
    title = "Tour of Heroes";
}
```

--

#### meu.component.html

```html
<h1>{{title}}</h1>
```

--

#### meu.component.css

```css
h1 {
    color: red;
}
```

---

## Componentes em Angular

### Templates

As templates Angular combinam o HTML tradicional com um código de marcação próprio do Angular. Esse código de marcação Angular pode modificar os elementos HTML antes deles serem exibidos em tela. Usando a sintaxe de "binding markup" é possível conectar sua aplicação Angular ao DOM (JavaScript).

--

Existem dois tipos fundamentais de bindings em Angular:

-   `Event binding` => permite seu aplicativo observar e responder a eventos de interação do usuário (onClick, onChange e etc)
-   `Property binding` => permite ao aplicativo interpolar e exibir valores de variáveis computadas em seu HTML

Antes de uma tela ser exibida, o Angular analisa as diretivas e transformar a sintaxe de ligação da template afim de modificar os elementos HTML e o DOM, de acordo com os dados e a lógica de sua programação.

--

Diferente do _React_ o Angular suporta **ligação de dados bidirecional** _(two-way data binding)_, o que significa que alterações no DOM, como opções e inputs do usuário, também são refletidas nos dados de sua aplicação.

---

## Componentes em Angular

### Templates

Exemplo de template HTML:

```html
<div class="meu-app">
    <h4>{{meuValor}}</h4>
    <button [disabled]="meuValor === 2" (click)="atualizaValor()">
        Atualiza Valor
    </button>
</div>
```

--

Na template acima `meuValor` será uma variável baseada na parte lógica de nosso componente. E o evento de onclick definido através de `(click)="atualizaValor()"` irá acionar uma função chamada **atualizaValor()** também na camada lógica de nosso componente.

--

Vale a pena dar uma olhada na documentação completa de templates: <https://angular.io/guide/template-syntax>

---

## Componentes em Angular

### Templates - Diretivas Estruturais

Outro ponto que vale ser observado sobre o Angular e suas templates, são as _structural directives_ que vem "de fábrica".

Estas diretivas estruturais moldam ou reformulam a estrutura do DOM, geralmente adicionando, removendo e manipulando os elementos as quais estão conectadas.

As _structural directives_ mais comuns são:

--

👉 `NgIf` => condicionalmente adiciona ou remove um elemento do DOM _(ou da tela)_

```html
<div *ngIf="count > 1">Meu Contador: {{ count }}</div>
```

--

👉 `NgForOf` => repete a template para cada item de uma lista

```html
<ul>
    <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

---

## Componentes em Angular

#### NgModel - Two-way data binding para campos de formulário

Ao desenvolver formulários, você geralmente exibe em um campo uma variável de dados e atualiza essa propriedade quando o usuário faz alterações.

A ligação de dados bidirecional (Two-way data binding) com a diretiva `ngModel` deixa o "caminho" menos difícil:

```html
<input [(ngModel)]="name" />
```

--

Sem o uso do `ngModel` teríamos que fazer isso daqui em todos os campos _(parecido com React)_:

```html
<input [value]="name" (input)="name=$event.target.value" />
```

---

## Componentes em Angular

#### NgModel - Two-way data binding para campos de formulário

Antes de começar a usar `ngModel` será necessário importar o módulo `FormsModule` e adicioná-lo a uma lista de módulos da aplicação com a diretiva _NgModule_:

```ts
import { NgModule } from "@angular/core"; // <-- NgModule
import { FormsModule } from "@angular/forms"; // <-- FormsModule

...
@NgModule({
    // array com módulos "dependentes" para funcionamento da aplicação/component
    imports: [FormsModule],
})
export class AppModule {}
```

---

class: center, middle

## DEMO TIME 🚀

.center[.gif-img[![Boooom!](./img/brain.gif)]]

---

## Vue.js

O **Vue** (pronuncia-se /vjuː/, como _view_, em inglês) é um **framework** progressivo para a construção de interfaces de usuário

--

Criado (2014) por Evan You _(ex-funcionário do Google)_ inspirado no finado _AngularJS_

--

O processo de criação do Vue.js deu-se neste momento: _"Eu imaginei seguinte: e se eu pudesse simplesmente extrair a parte que eu realmente gostei sobre o AngularJS e construir algo realmente leve e funciona?!"_

--

Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotável incrementalmente

--

A **biblioteca principal** é focada exclusivamente na camada visual _(view layer)_, sendo fácil adotar e integrar com outras bibliotecas ou projetos existentes

--

Têm muita "inspiração" _(mix)_ de: `AngularJS`, `React` e o `Angular`.

---

## Iniciando com Vue.js

Das tecnologias apresentadas até aqui Vue.js é a de uso inicial _"mais simples"_. Pode-se trabalhar tanto de maneira avançada como no recomendado para React ou Angular, mas também pode-se trabalhar de forma simples apenas carregando um arquivo .js externo em seu HTML padrão:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

Depois disto, você poderá trabalhar com "micro-inserições" de Vue.js em seu projeto já existente ou que tenha menor escala.

--

Siga o tópico instalação para mais detalhes:<br /><https://br.vuejs.org/v2/guide/installation.html>

---

## Componentes em Vue.js

No núcleo do _Vue.js_ está um sistema que nos permite declarativamente renderizar dados no DOM (Document Object Model) usando uma sintaxe de template simples.

Você pode escrever inicialmente em seu HTML normal diretivas de template semelhantes a Angular:

```html
<div id="app">
    {{ message }}
</div>
```

--

E depois utilizer o código JavaScript especifico do Vue.js para "ativar" o seu componente/aplicação:

```js
const app = new Vue({
    el: "#app",
    data: {
        message: "Olá Vue!",
    },
    methods: {
        // métodos...
    },
});
```

---

## Componentes em Vue.js

### Templating

As templates usadas em componentes Vue.js possuem bindings semelhantes ao Angular:

```html
<p v-if="seen">Agora você me viu</p>
```

--

```html
<ol>
    <li v-for="todo in todos">
        {{ todo.text }}
    </li>
</ol>
```

--

E também declaração de eventos:

```html
<button v-on:click="meuCustomMethodClick">Clique me</button>
```

---

class: center, middle

## DEMO TIME 🚀

.center[.gif-img[![Boooom!](./img/brain.gif)]]
