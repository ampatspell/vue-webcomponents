import { defineCustomElement } from "vue";
import NextThingComponent from "./next-thing.vue";

export const NextThing = defineCustomElement(NextThingComponent);

export function register() {
  customElements.define('next-thing', NextThing)
}
