import { bags } from "./bags";
import { clothings } from "./clothings";
import { grips } from "./grips";
import { rackets } from "./rackets";
import { shoes } from "./shoes";
import { shuttlecocks } from "./shuttlecocks";
import { socks } from "./socks";
import { strings } from "./strings";
import { towels } from "./towels";
import { wristbands } from "./wristbands";
import type { Product } from "./types";

export const products: Product[] = [
  ...rackets,
  ...shoes,
  ...clothings,
  ...grips,
  ...shuttlecocks,
  ...bags,
  ...strings,
  ...socks,
  ...towels,
  ...wristbands,
];

export {
  bags,
  clothings,
  grips,
  rackets,
  shoes,
  shuttlecocks,
  socks,
  strings,
  towels,
  wristbands,
};
export type { Product } from "./types";
