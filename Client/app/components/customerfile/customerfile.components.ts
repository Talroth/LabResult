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
    IsPopUpShow : string;
    single: customerFileDAO;

    constructor(private loadFile:LoadFile) {
        this.IsPopUpShow = "none";
    }

     ngOnInit() {
            this.single = {_id:"", Date: "", Diagnose: ""};
            this.loadFile.getFileItems().subscribe(file => {
                 this.rows = file;                
                 console.log(file);         
             }); 
     }

     editRow(event, id) {
         event.preventDefault();
         this.loadFile.getFileItem(id).subscribe(file => {
             console.log(file);
             this.IsPopUpShow = "inherit";
            //  this.single = {_id: file._id, Date: file.Date, Diagnose: file.Diagnose};
             this.single = file;
            });         
     }
}