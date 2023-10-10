import { Component, Input, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent{

  @Input() centers!: VaccinationCenter[];
  //centers!: VaccinationCenter[];
  selected?: VaccinationCenter;

  constructor(){}

  ngOnInit() : void{}

/*
  
    this.centers = this.service.getAllvaccinationCenter()/*.subscribe(resultCenters=>{
      this.centers = resultCenters;
    })*//*;
  }
*/

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectedCenter(aCenter: VaccinationCenter): void{
    this.selected=aCenter;
  }

  onDeleted(center: VaccinationCenter): void{
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }
}
