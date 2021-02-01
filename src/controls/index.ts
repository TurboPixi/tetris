import { Keyboard } from "./Keyboard";
import { inject, injectable } from "inversify";
import { TYPES } from "../containers/types";
import {Gesture} from "./Gesture";

@injectable()
export class GameControls {
  constructor(@inject(TYPES.Keyboard) public keyboard: Keyboard, @inject(TYPES.Gesture) public gesture: Gesture) {}
  reset() {
    this.keyboard.resetMappings();
  }
}
