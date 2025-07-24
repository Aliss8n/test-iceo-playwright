import contactInputs from "./contact/input";
import contactButtons from "./contact/button";
import commonModalElements from "./common/modal";
import commonButtonElements from "./common/button";

export const elementMap: Record<string, string> = {
  ...contactInputs,
  ...contactButtons,
  ...commonModalElements,
  ...commonButtonElements,
};
