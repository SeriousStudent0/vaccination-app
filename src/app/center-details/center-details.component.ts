import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-center-details',
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.scss']
})
export class CenterDetailsComponent implements OnInit{

  center : VaccinationCenter | undefined;
  id : Number = 0;

  constructor(private route: ActivatedRoute, private service: VaccinationService){}

  ngOnInit(): void {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (idParam !== null) {
      this.id = idParam;
      //const id = parseInt(idParam);
      this.service.getSpecificCenter(idParam)
      .pipe(defaultIfEmpty({} as VaccinationCenter))
      .subscribe((specificCenter) => {
        this.center = specificCenter;
      });
    }
  }
}
