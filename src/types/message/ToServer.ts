/**
 * The messages the client can send to the server.
 */
export enum ToServer {
  SEND_SESSION_TOKEN = "SendSessionToken",
  REQUEST_OWNED_PAWNS = "RequestOwnedPawns",
  REQUEST_WORLD = "RequestWorld"
}