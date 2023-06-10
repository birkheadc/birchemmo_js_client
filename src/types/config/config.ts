import { ICredentials } from "../credentials/Credentials";
import { Role } from "../role/role";

export interface Config {
  version: string,
  environment: string,
  isMockAuthentication: boolean,
  mockUsers: { username: string, password: string, role: Role }[]
}