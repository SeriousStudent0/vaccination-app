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

  centers: VaccinationCenter[] = [
    {
      id: 1,
      name: "vacccenter1",
      openingDate: new Date(2023, 10, 10),
      address: "12 rue de la rue",
      city: "Nancy",
      postalCode: "54000"
    },
    {
      id: 2,
      name: "vacccenter2",
      openingDate: new Date(2023, 10, 8),
      address: "11 rue de la rue",
      city: "Lyon",
      postalCode: "69000"
    },
    {
      id: 3,
      name: "vacccenter3",
      openingDate: new Date(2023, 10, 9),
      address: "10 rue de la rue",
      city: "Paris",
      postalCode: "10000"
    }
  ]

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
