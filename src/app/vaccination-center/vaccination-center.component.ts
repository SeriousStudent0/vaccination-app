import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthCenter } from '../healthCenter';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {

  @Input() center?: HealthCenter;
  @Output() deleted = new EventEmitter<HealthCenter>();
  
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
