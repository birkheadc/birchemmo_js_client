import IChunk from "./Chunk/IChunk";
import IPawn from "./Pawn/IPawn";

export default interface IGameState {
  pawns: IPawn[],
  currentPawn: number | null,
  visibleWorld: IChunk[],

  setPawns: (pawns: IPawn[]) => void,
  setCurrentPawn: (n: number | null) => void,
  setVisibleWorld: (chunks: IChunk[]) => void,

  copyState: (oldState: IGameState) => void
}