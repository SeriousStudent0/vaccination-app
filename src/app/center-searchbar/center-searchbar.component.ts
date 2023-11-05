import { Component, OnInit } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { defaultIfEmpty } from 'rxjs';
import { HealthCenter } from '../healthCenter';

@Component({
  selector: 'app-center-searchbar',
  templateUrl: './center-searchbar.component.html',
  styleUrls: ['./center-searchbar.component.scss']
})
export class CenterSearchbarComponent implements OnInit{

  centers: HealthCenter[] = [];
  searchQuery : string = "";
  selected?: HealthCenter;

  constructor(private service: VaccinationService){}

  ngOnInit() : void{
    this.service.getAllvaccinationCenter().subscribe({
      next: (data: HealthCenter[]) => {
        this.centers = data;
      },
      error: (error) => {
        console.error('Error fetching centers', error);
      }
    });
  }

  search() : void{
    this.service.getAllvaccinationCenterSearchByCity(this.searchQuery)
    .pipe(defaultIfEmpty({} as HealthCenter[]))
    .subscribe((vaccinationCenterList) =>{
      this.centers = vaccinationCenterList;
    });
  }

  searchEmpty() : void{
    this.searchQuery = "";
    this.service.getAllvaccinationCenterSearchByCity(this.searchQuery)
    .pipe(defaultIfEmpty({} as HealthCenter[]))
    .subscribe((vaccinationCenterList) =>{
      this.centers = vaccinationCenterList;
    });
  }
}



