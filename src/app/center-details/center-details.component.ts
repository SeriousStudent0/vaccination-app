import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { defaultIfEmpty } from 'rxjs';
import { HealthCenter } from '../healthCenter';
import { Patient, PatientRequest } from '../patient';
import { RendezVous } from '../rendezVous';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.scss']
})
export class CenterDetailsComponent implements OnInit{

  center : HealthCenter | undefined;
  id : Number = 0;
  newPatient : PatientRequest | undefined;
  firstname = "";
  lastname = "";
  newRDV : RendezVous | undefined;

  constructor(private route: ActivatedRoute, private service: VaccinationService){}

  ngOnInit(): void {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (idParam !== null) {
      this.id = idParam;
      this.service.getSpecificCenter(idParam)
      .pipe(defaultIfEmpty({} as HealthCenter))
      .subscribe((specificCenter) => {
        this.center = specificCenter;
      });
    }
  }
}
