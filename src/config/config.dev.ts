import { Config } from "../types/config/config"
import { Role } from "../types/role/role";
import COMMON_CONFIG from "./config.common"

const DEV_CONFIG: Config = {
  ...COMMON_CONFIG,
  environment: "development",
  authentication: {
    ...COMMON_CONFIG.authentication,
    isMockAuthentication: true,
    mock: {
      users: [
        { id: '00000000-0000-0000-0000-000000000001', username: 'super', password: 'password', role: Role.SUPER_ADMIN, },
        { id: '00000000-0000-0000-0000-000000000002', username: 'admin', password: 'password', role: Role.ADMIN, },
        { id: '00000000-0000-0000-0000-000000000003', username: 'user', password: 'password', role: Role.VALIDATED_USER, },
        { id: '00000000-0000-0000-0000-000000000004', username: 'unvalidated', password: 'password', role: Role.UNVALIDATED_USER, },
        { id: '00000000-0000-0000-0000-000000000005', username: 'visitor', password: 'password', role: Role.VISITOR, }
      ],
      jwtSecretKey: 'secretsecretsecretsecretsecretsecret',
      delayMS: 500
    },
    authenticationServerUrl: "http://localhost:5237/authenticate"
  },
  game: { 
    ...COMMON_CONFIG.game,
    serverUrl: 'http://localhost:5237/game'
  } 
}

export default DEV_CONFIG;