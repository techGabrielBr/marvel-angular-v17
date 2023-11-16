import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HashStrService } from '../hash/hash-str.service';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericItemService<T> {

  private type!: string;

  constructor(private http: HttpClient, private hashStrService: HashStrService, type: string) {
    this.type = type;
  }

  private privateKey = environment.PRIVATE_API_KEY;
  private publicKey = environment.PUBLIC_API_KEY;

  getAll(offset: number){
    const ts: number = Date.now();
    return this.http.get<T>(`${environment.API_URL}/${this.type}?ts=${ts}&apikey=${this.publicKey}&hash=${this.hashStrService.generateHash(ts)}&offset=${offset}`);
  }

  getByStr(str: string, type: string){
    const ts: number = Date.now();
    return this.http.get<T>(`${environment.API_URL}/${this.type}?ts=${ts}&apikey=${this.publicKey}&hash=${this.hashStrService.generateHash(ts)}&${type}=${str}`);
  }
}
