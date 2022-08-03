import { selector } from "recoil";
import { modeAtom } from "./mode";

import { LINE } from "@/controllers/line";
import { CIRCLE } from "@/controllers/circle";
import { FREEHAND } from "@/controllers/freehand";
import { POLYGON } from "@/controllers/polygon";
import { RECTANGLE } from "@/controllers/rectangle";
import { PATH } from "@/controllers/path";

const controllers = {
  LINE,
  CIRCLE,
  FREEHAND,
  POLYGON,
  RECTANGLE,
  PATH,
};

export const controllerAtom = selector({
  key: "controller",
  get: ({ get }) => {
    const mode = get(modeAtom);
    return controllers[mode];
  },
});
