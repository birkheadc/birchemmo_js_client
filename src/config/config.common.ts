import { Config } from "../types/config/config";

/**
 * This config file exports default values for all the config keys used by the application.
 * These values can be overwritten in `config.dev.js`, `config.prod.js` etc.
 */
const COMMON_CONFIG: Config = {
  version: "0.0.1",
  environment: "null",
  authentication: {
    isMockAuthentication: false,
    mock: {
      users: [],
      delayMS: 0
    }
  },
  game: { 
    serverUrl: ''
  }
};
export default COMMON_CONFIG;