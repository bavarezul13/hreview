import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, char: string) {
        return value.replace(char, ' ');
    }
}