import IPawn from "../Pawn/IPawn";

export default interface IPawnsState {
  all: IPawn[],
  availableNew: number
}