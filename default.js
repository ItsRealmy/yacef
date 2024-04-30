import { parse } from "yaml";
import fs from "node:fs";

const config = parse(fs.readFileSync("./conf.yml", "utf-8"));
export default config;
