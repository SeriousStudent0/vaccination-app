import { Component, OnInit } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from '../vaccination-center';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-center-searchbar',
  templateUrl: './center-searchbar.component.html',
  styleUrls: ['./center-searchbar.component.scss']
})
export class CenterSearchbarComponent implements OnInit{

  centers: VaccinationCenter[] = [];
  searchQuery : string = "";
  selected?: VaccinationCenter;

  constructor(private service: VaccinationService){}

  ngOnInit() : void{
    this.service.getAllvaccinationCenter().subscribe({
      next: (data: VaccinationCenter[]) => {
        this.centers = data;
      },
      error: (error) => {
        console.error('Error fetching centers', error);
      }
    });
  }

  search() : void{
    this.service.getAllvaccinationCenterSearchByCity(this.searchQuery)
    .pipe(defaultIfEmpty({} as VaccinationCenter[]))
    .subscribe((vaccinationCenterList) =>{
      this.centers = vaccinationCenterList;
    });
  }

  searchEmpty() : void{
    this.searchQuery = "";
    this.service.getAllvaccinationCenterSearchByCity(this.searchQuery)
    .pipe(defaultIfEmpty({} as VaccinationCenter[]))
    .subscribe((vaccinationCenterList) =>{
      this.centers = vaccinationCenterList;
    });
  }
}



