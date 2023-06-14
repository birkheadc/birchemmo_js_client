import IPawn from "./IPawn";

export default class Pawn implements IPawn {
  title: string = "";

  setTitle(title: string) {
    this.title = title;
  };

  getShallowCopy() {
    return this;
  }
}