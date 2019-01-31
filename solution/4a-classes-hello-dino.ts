class DinoKeeper {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} says "hi"`);
  }
}

export default DinoKeeper;
