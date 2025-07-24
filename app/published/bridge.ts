import { ref } from 'vue'

export class Bridge {
  name: Ref<string>;

  constructor() {
    this.name = ref('hello');
  }
}

export const bridge = new Bridge();
