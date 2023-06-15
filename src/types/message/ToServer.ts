/**
 * The messages the client can send to the server.
 */
export enum ToServer {
  SEND_SESSION_TOKEN = "SendSessionToken",
  REQUEST_PAWNS_STATE = "RequestPawnsState",
  REQUEST_WORLD_STATE = "RequestWorldState"
}