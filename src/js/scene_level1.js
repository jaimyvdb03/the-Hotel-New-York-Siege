import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './Player.js'
import { Cockroach } from './cockroach.js'
import { Reaper } from './reaper.js'
import { Lich } from './lich.js'
import { Speedboost } from './Speedboost.js';
import { Lifeboost } from './Lifeboost.js';
import { Life } from './Lifes.js';


export class Wave1 extends Scene {
    onInitialize(engine) {
        console.log("Wave 1");

        this.add(new Speedboost(400, 400));
        this.add(new Lifeboost(600, 400));
        this.add(new Lifeboost(630, 400));
        this.add(new Lifeboost(660, 400));
        let player = new Player(100, 300);
        this.add(player);

        //this.camera.zoom = 1.1;
        //this.camera.strategy.lockToActor(player);
        let lich = new Lich(player);
        this.add(lich);

        let roach = new Cockroach(player);
        this.add(roach);

        let reaper = new Reaper(player);
        this.add(reaper);
        
        this.add(new Life(75, 50, player));
    }
}
