import {HEROES} from './mock-heroes';
import {Heroe} from "./heroe.model";

export class ServicioHeroes {
    consultarHeroes():Promise<Heroe[]> {
        return Promise.resolve(HEROES);
    }

    consultarHeroePorId(id:number):Promise<Heroe> {
        return Promise.resolve(HEROES)
            .then((heroes) => {
                for (var heroe of heroes) {
                    if (heroe.id === id) {
                        return heroe;
                    }
                }
            });
    }
}
