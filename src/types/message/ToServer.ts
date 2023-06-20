/**
 * The messages the client can send to the server.
 */
export enum ToServer {
  PING = "Ping",
  RETURN_PING = "ReturnPing",
  REQUEST_PAWNS_STATE = "RequestPawnsState",
  REQUEST_WORLD_STATE = "RequestWorldState"
}