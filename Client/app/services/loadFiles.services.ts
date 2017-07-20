import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { customerFileDAO } from '../../DAO/customerFile.DAO';
import 'rxjs/add/operator/map';


@Injectable()
export class LoadFile {
    constructor(private http:Http) {
        console.log('Load file init....');
    }

    getFileItems() {
        return this.http.get('/customerFile/1').map(res => res.json());
    }
}