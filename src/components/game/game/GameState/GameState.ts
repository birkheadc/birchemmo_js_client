import IChunk from "./Chunk/IChunk";
import IGameState from "./IGameState";
import IPawn from "./Pawn/IPawn";
import IPawnsState from "./PawnsState/IPawnsState";
import PawnsState from "./PawnsState/PawnsState";
import IWorldState from "./WorldState/IWorldState";
import WorldState from "./WorldState/WorldState";

export default class GameState implements IGameState {
  pawnsState: IPawnsState = new PawnsState();
  worldState: IWorldState = new WorldState();

  setPawnsState(pawnsState: IPawnsState) {
    this.pawnsState = pawnsState;
  }

  setWorldState(worldState: IWorldState) {
    this.worldState = worldState;
  }

  copyState(oldState: IGameState) {
    this.setPawnsState(oldState.pawnsState);
    this.setWorldState(oldState.worldState);
  }
}