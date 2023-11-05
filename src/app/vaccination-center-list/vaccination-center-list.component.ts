import { Component, Input, OnInit } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { HealthCenter } from '../healthCenter';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent{

  @Input() centers!: HealthCenter[];
  //centers!: VaccinationCenter[];
  selected?: HealthCenter;

  constructor(){}

  ngOnInit() : void{}

/*
  
    this.centers = this.service.getAllvaccinationCenter()/*.subscribe(resultCenters=>{
      this.centers = resultCenters;
    })*//*;
  }
*/

  isSpecialCenter(center: HealthCenter){
    return center.address.city == "Nancy";
  }

  selectedCenter(aCenter: HealthCenter): void{
    this.selected=aCenter;
  }

  onDeleted(center: HealthCenter): void{
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }
}
