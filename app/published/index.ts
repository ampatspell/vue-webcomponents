import { defineCustomElement } from "vue";
import NextHello from "./next-hello.vue";

customElements.define('next-hello', defineCustomElement(NextHello));
