import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityName'
})
export class CityNamePipe implements PipeTransform {

  // receive param list we want to filter and the searchterm string
  transform() {

  }

}
