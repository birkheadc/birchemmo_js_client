import { Config } from "../types/config/config"
import COMMON_CONFIG from "./config.common"

const PROD_CONFIG: Config = {
  ...COMMON_CONFIG,
  environment: "production",
  isMockAuthentication: false
}

export default PROD_CONFIG;