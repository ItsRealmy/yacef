import { parse } from "yaml";
import fs from "node:fs";

/**
 * Parses and returns a YAML file.
 * @param {string} path The path to the YAML file. Defaults to `./conf.yml`.
 * @returns {any} The parsed YAML file.
 */
export default function yacef(path) {
  const parsed = parse(fs.readFileSync(path || "./conf.yml", "utf-8"));
  return parsed;
}
