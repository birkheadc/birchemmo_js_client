/**
 * The messages the client can receive from the server.
 */
export enum FromServer {
  REQUEST_SESSION_TOKEN = "RequestSessionToken",
  CONFIRM_SESSION_TOKEN = "ConfirmSessionToken",
  SEND_OWNED_PAWNS = "SendOwnedPawns",
  SEND_WORLD = "SendWorld"
}