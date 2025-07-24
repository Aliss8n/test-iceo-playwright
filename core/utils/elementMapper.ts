import { elementMap } from "../elements";

export function getElement(name: string): string {
  const selector = elementMap[name];
  if (!selector) {
    throw new Error(`Selector not found for element "${name}" in elementMap.`);
  }
  return selector;
}
