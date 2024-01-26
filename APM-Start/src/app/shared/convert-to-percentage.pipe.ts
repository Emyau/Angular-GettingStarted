import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToPercentage'
})

export class ConvertToPercentagePipe implements PipeTransform {
    
    transform(value: number): string {
        return value*100/5 + '/100';
    }

}