import IChunk from "./Chunk/IChunk";
import IPawn from "./Pawn/IPawn";
import IPawnsState from "./PawnsState/IPawnsState";
import IWorldState from "./WorldState/IWorldState";

export default interface IGameState {
  pawnsState: IPawnsState,
  worldState: IWorldState,

  setPawnsState: (pawnsState: IPawnsState) => void,
  setWorldState: (worldState: IWorldState) => void,

  copyState: (oldState: IGameState) => void
}