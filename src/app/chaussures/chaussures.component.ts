import { Component, OnInit } from '@angular/core';
import { chaussure } from '../../model/chaussure.model';
import { ChaussureServiceService } from '../services/chaussure-service.service';

@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrl: './chaussures.component.css'
})
export class ChaussuresComponent implements OnInit {

  chaussures : chaussure[]; 
   constructor(private chaussureService: ChaussureServiceService) {
    this.chaussures = [];
    }
    
  
  
   ngOnInit(): void {
    this.chargerchaussures();
    }
   
    chargerchaussures(){
      this.chaussureService.listechaussures().subscribe(prods => {
        console.log(prods);
        this.chaussures = prods;
        });
    }
}
