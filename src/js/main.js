import { Component, mount, xml } from "./owl.es.js";
import "../scss/main.scss";

// Componente mínimo
class App extends Component {
  static template = xml`
  <h1 class="title">¡Hola OWL + SCSS!</h1>
  <h2 class="subtitle">¡using vite!</h2>
  `;
}

// Montar la app
mount(App, document.getElementById("app"));
