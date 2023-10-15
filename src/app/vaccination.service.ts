import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  private apiUrl = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  getAllvaccinationCenter() : Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>('http://localhost:8080/public/healthcenter');
  }

  getAllvaccinationCenterSearchByCity(letters : string) : Observable<VaccinationCenter[]>{
    const searchLetters = letters.toLowerCase();

    return this.getAllvaccinationCenter().pipe(
      map((vaccinationCenters) =>
        vaccinationCenters.filter((center) =>
          center.city.toLowerCase().startsWith(searchLetters)
        )
      )
    );
  }

  getSpecificCenter(id : number) : Observable<VaccinationCenter | undefined>{
    return this.getAllvaccinationCenter().pipe(
      map((vaccinationCenters) =>
        vaccinationCenters.find((center) => 
          center.id === id)
      )
    );
  }
}
