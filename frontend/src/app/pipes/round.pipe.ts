import {Pipe, PipeTransform} from "@angular/core";
 
/**
 * integrated from http://blog.bastien-donjon.fr/round-number-angular-2-pipe/
 */
@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): number {
        return Math.round(value);
    }
}