import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityName'
})
export class CityNamePipe implements PipeTransform {

  transform(cities: any, searchText: any): any {
    if(searchText == null) return cities;

    return cities.filter(function(city){
      return city.CityName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
