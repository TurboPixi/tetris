import Hammer from 'hammerjs'
import {injectable} from "inversify";
import {RENDERER_CONFIG} from "../constants";
type Mapping = { [key: string]: Function };
@injectable()
export class Gesture {
    private keySwipeMappings: Mapping = {};
    constructor() {
        const manager = new Hammer.Manager(RENDERER_CONFIG.view);
        manager.add(new Hammer.Swipe());
        ['swipeleft', 'swiperight', 'swipeup', 'swipedown'].forEach(e => {
            manager.on(e, (e) =>{
                const { type: key } = e;
                const handler = this.keySwipeMappings[key];
                if (handler) {
                    handler();
                }
            })
        })
    }
    putSwipeMappings(mappings: Mapping) {
        this.keySwipeMappings = mappings
    }
}
