import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HealthCenter } from './healthCenter';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  private apiUrl = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  getAllvaccinationCenter() : Observable<HealthCenter[]>{
    return this.httpClient.get<HealthCenter[]>('http://localhost:8080/public/healthcenter');
  }

  getAllvaccinationCenterSearchByCity(letters : string) : Observable<HealthCenter[]>{
    const searchLetters = letters.toLowerCase();

    return this.getAllvaccinationCenter().pipe(
      map((vaccinationCenters) =>
        vaccinationCenters.filter((center) =>
          center.address.city.toLowerCase().startsWith(searchLetters)
        )
      )
    );
  }

  getSpecificCenter(id : number) : Observable<HealthCenter | undefined>{
    return this.getAllvaccinationCenter().pipe(
      map((vaccinationCenters) =>
        vaccinationCenters.find((center) => 
          center.id === id)
      )
    );
  }
}
