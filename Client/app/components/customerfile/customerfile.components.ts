import { Component } from '@angular/core';
import { LoadFile } from '../../services/loadFiles.services';
import { customerFileDAO } from '../../../DAO/customerFile.DAO';

@Component({
  moduleId: module.id,
  selector: 'customerFile',
  templateUrl: 'customerFile.components.html'
})
export class CustomerfileComponent { 
    rows : customerFileDAO[];


    constructor(private loadFile:LoadFile) {
    
    }

     ngOnInit() {
            this.loadFile.getFileItems().subscribe(file => {
                 this.rows = file;                
                 console.log(file);
             }); 
     }
}