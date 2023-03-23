import {EventEmitter} from "events";

export default class Sizes extends EventEmitter {
    constructor() {
        super();
        this.width = window.innerWidth;
        this.heigth = window.innerHeight;
        this.aspect = this.width / this.heigth;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.heigth = window.innerHeight;
            this.aspect = this.width / this.heigth;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        })
    }
}