import { Component } from '@angular/core';
import { LoadFile } from './../../services/loadFiles.services'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [LoadFile]
})
export class AppComponent { }
