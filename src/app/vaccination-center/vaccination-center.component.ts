import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {

  @Input() center?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();
  
  constructor( private route: ActivatedRoute){}

  ngOnInit(): void{

  }
  
  clearName(): void{
    this.center!.name="";
  }

  delete(): void{
    this.deleted.emit(this.center);
  }
}
