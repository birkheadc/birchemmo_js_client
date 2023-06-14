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
        { id: '00', username: 'super', password: 'password', role: Role.SUPER_ADMIN },
        { id: '01', username: 'admin', password: 'password', role: Role.ADMIN },
        { id: '02', username: 'user', password: 'password', role: Role.VALIDATED_USER },
        { id: '03', username: 'unvalidated', password: 'password', role: Role.UNVALIDATED_USER },
        { id: '04', username: 'visitor', password: 'password', role: Role.VISITOR }
      ],
      delayMS: 500
    }
  },
  game: { 
    ...COMMON_CONFIG.game,
    serverUrl: 'http://localhost:5237/game'
  } 
}

export default DEV_CONFIG;