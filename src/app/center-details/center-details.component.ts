import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { catchError, defaultIfEmpty, of, switchMap } from 'rxjs';
import { HealthCenter } from '../healthCenter';
import { Patient, PatientRequest } from '../patient';
import { RendezVous, RendezVousRequest } from '../rendezVous';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.scss']
})
export class CenterDetailsComponent implements OnInit{

  toggleDisplay : boolean = false;
  center : HealthCenter | undefined;
  id : Number = 0;
  newPatient : PatientRequest = {
    email : "",
    name : ""
  };
  firstname = "";
  lastname = "";
  newRDV : RendezVousRequest = {
    date : new Date(),
    patient :{
      id : 0
    }
  };

  constructor(private route: ActivatedRoute, private service: VaccinationService, private router: Router){}

  ngOnInit(): void {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (idParam != null) {
      this.id = idParam;
      this.service.getSpecificCenter(idParam)
      .pipe(defaultIfEmpty({} as HealthCenter))
      .subscribe((specificCenter) => {
        this.center = specificCenter;
        this.toggleDisplay = true;
      });
    }
  }

  bookRDV(){
    this.newPatient.name = this.firstname+ " " + this.lastname;
    // Create a new patient and use switchMap to chain the rdv creation
    this.service
    .createNewPatient(this.newPatient)
    .pipe(
      switchMap((responsePatient) => {
        // Handle success response for creating a new patient
        // Now that we have the patient ID from the response, we use it for creating the rdv
        const patientId = responsePatient?.id || 0;
        this.newRDV.patient.id = patientId;
        // Return an observable for creating the new rdv
        return this.service.createNewRDV(this.newRDV);
      }),
      catchError((error) => {
        // Handle the error for creating a new patient
        console.error('Error creating new patient', error);
        return of(null); // Returning a fallback value, like null, to continue the observable chain
        // Or rethrow the error: return throwError(error);
      })
    )
    .subscribe({
      next: () => {
        // Handle success response for creating a new rdv -> leads to the confirmation page
        this.router.navigate(['/confirmation']);
      },
      error: (error) => {
        // Handle error for creating a new rdv
        console.error('Error creating new rendez-vous', error);
      }
    });
  }
}
