import { Config } from "../types/config/config"
import COMMON_CONFIG from "./config.common"

const PROD_CONFIG: Config = {
  ...COMMON_CONFIG,
  environment: "production",
  authentication: {
    ...COMMON_CONFIG.authentication,
  },
  game: {
    ...COMMON_CONFIG.game
  }
}

export default PROD_CONFIG;