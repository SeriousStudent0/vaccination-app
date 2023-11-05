import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthCenter } from '../healthCenter';

@Component({
  selector: 'app-center-box',
  templateUrl: './center-box.component.html',
  styleUrls: ['./center-box.component.scss']
})
export class CenterBoxComponent implements OnInit {

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
