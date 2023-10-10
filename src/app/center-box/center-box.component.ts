import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-center-box',
  templateUrl: './center-box.component.html',
  styleUrls: ['./center-box.component.scss']
})
export class CenterBoxComponent implements OnInit {

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
