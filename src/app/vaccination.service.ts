import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HealthCenter } from './healthCenter';
import { Patient, PatientRequest } from './patient';
import { RendezVous, RendezVousRequest } from './rendezVous';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  private apiUrl = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  getAllvaccinationCenter() : Observable<HealthCenter[]>{
    return this.httpClient.get<HealthCenter[]>('http://localhost:8080/healthcenter/public');
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

  createNewPatient(patient : PatientRequest) : Observable<Patient>{
    return this.httpClient.post<Patient>('http://localhost:8080/patient/public/create', patient);
  }

  createNewRDV(rdv : RendezVousRequest) : Observable<RendezVous>{
    return this.httpClient.post<RendezVous>('http://localhost:8080/rendezvous/public/create', rdv);
  }
}
