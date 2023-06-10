import { Config } from "../types/config/config"
import { Role } from "../types/role/role";
import COMMON_CONFIG from "./config.common"

const DEV_CONFIG: Config = {
  ...COMMON_CONFIG,
  environment: "development",
  isMockAuthentication: true,
  mockUsers: [
    { username: 'super', password: 'password', role: Role.SUPER_ADMIN },
    { username: 'admin', password: 'password', role: Role.ADMIN },
    { username: 'user', password: 'password', role: Role.VALIDATED_USER },
    { username: 'unvalidated', password: 'password', role: Role.UNVALIDATED_USER },
    { username: 'visitor', password: 'password', role: Role.VISITOR }
  ]
}

export default DEV_CONFIG;