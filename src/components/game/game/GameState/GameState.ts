import IChunk from "./Chunk/IChunk";
import IGameState from "./IGameState";
import IPawn from "./Pawn/IPawn";

export default class GameState implements IGameState {
  pawns: IPawn[] = [];
  currentPawn: number | null = null;
  visibleWorld: IChunk[] = [];

  setPawns(pawns: IPawn[]) {
    this.pawns = pawns;
  }

  setCurrentPawn(n: number | null) {
    this.currentPawn = n;
  }

  setVisibleWorld(world: IChunk[]) {
    this.visibleWorld = world;
  }

  copyState(oldState: IGameState) {
    this.setPawns(oldState.pawns);
    this.setCurrentPawn(oldState.currentPawn);
    this.setVisibleWorld(oldState.visibleWorld);
  }
}