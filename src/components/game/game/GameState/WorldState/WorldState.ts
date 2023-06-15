import IChunk from "../Chunk/IChunk";
import IWorldState from "./IWorldState";

export default class WorldState implements IWorldState {
  chunks: IChunk[] = [];
}