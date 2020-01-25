import { ExampleStore } from './ExampleStore'

class RootStore {
  constructor() {
    this.exampleStore = new ExampleStore(this)
  }
}

export const rootStore = new RootStore()
