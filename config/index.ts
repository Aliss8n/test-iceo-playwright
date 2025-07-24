import * as fs from "fs";
import * as path from "path";

type EnvKey = "prod";

interface EnvConfig {
  base_url: string;
}

const configPath = path.resolve(__dirname, "./env.json");
const configJson = JSON.parse(fs.readFileSync(configPath, "utf-8")) as Record<EnvKey, EnvConfig>;

const env: EnvKey = (process.env.TEST_ENV as EnvKey) || "prod";

export const envConfig = configJson[env];
