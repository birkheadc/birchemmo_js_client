import IChunk from "./IChunk";

export default class Chunk implements IChunk {
  title: string = "";

  setTitle(title: string) {
    this.title = title;
  }

  getShallowCopy() {
    return this;
  }
}