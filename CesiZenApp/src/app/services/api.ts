import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  localHost:string = "http://localhost:8080";
  fromElserwhere:string = "http://10.244.128.59:8080";
  curHost:string = this.localHost;
  getActivites() {
    return this.http.get<any[]>(this.curHost+'/api/activites');
  }

  getActiviteById(id: string | number){
    return this.http.get(this.curHost+`/api/activites/${id}`);
  }

  getInformationById(id: string | number){
    return this.http.get(this.curHost+`/api/informations/${id}`);
  }

  getInformations() {
    return this.http.get<any[]>(this.curHost+'/api/informations');
  }

  getCitoyensConnectes() {
    return this.http.get<any[]>(this.curHost+'/api/citoyens-connectes');
  }
  loginGlobal(credentials: any) {
    return this.http.post(this.curHost+'/api/auth/login', credentials);
  }
}
