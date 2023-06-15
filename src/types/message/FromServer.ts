/**
 * The messages the client can receive from the server.
 */
export enum FromServer {
  REQUEST_SESSION_TOKEN = "RequestSessionToken",
  CONFIRM_SESSION_TOKEN = "ConfirmSessionToken",
  SEND_PAWNS_STATE = "SendPawnsState",
  SEND_WORLD_STATE = "SendWorldState"
}