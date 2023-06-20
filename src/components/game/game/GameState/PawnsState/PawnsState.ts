import IPawn from "../Pawn/IPawn";
import IPawnsState from "./IPawnsState";

export default class PawnsState implements IPawnsState {
  all: IPawn[] = [];
  availableNew: number = 0;
}