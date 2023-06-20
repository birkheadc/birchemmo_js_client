/**
 * The messages the client can receive from the server.
 */
export enum FromServer {
  PING = "Ping",
  RETURN_PING = "ReturnPing",
  SEND_PAWNS_STATE = "SendPawnsState",
  SEND_WORLD_STATE = "SendWorldState"
}