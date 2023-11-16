import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HashStrService {

  private privateKey = environment.PRIVATE_API_KEY;
  private publicKey = environment.PUBLIC_API_KEY;

  constructor() { }

  generateHash(ts: number){
    let md5 = Md5.hashStr(ts.toString() + this.privateKey + this.publicKey);
    return md5;
  }
}
