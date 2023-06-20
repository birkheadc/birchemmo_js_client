import { Role } from "../role/role";

export interface Config {
  version: string,
  environment: string,
  authentication: AuthenticationConfig
  game: GameConfig
}

export interface AuthenticationConfig {
  isMockAuthentication: boolean,
  mock: {
    users: { id: string, username: string, password: string, role: Role }[],
    jwtSecretKey: string,
    delayMS: number
  },
  loginServerUrl: string,
  authenticationServerUrl: string
}

export interface GameConfig {
  serverUrl: string
}