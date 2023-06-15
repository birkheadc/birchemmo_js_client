import IPawn from "../Pawn/IPawn";

export default interface IPawnsState {
  all: IPawn[],
  current: number | null,
  availableNew: number
}