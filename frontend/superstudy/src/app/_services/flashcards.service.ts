import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://superstudy.projektstudencki.pl:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
<<<<<<< HEAD
  providedIn: 'root',
})
export class FlashcardsService {
  constructor(private http: HttpClient) {}
=======
  providedIn: 'root'
})
export class FlashcardsService {

  constructor(private http: HttpClient) { }
>>>>>>> main

  addSet(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/add_set`, data, httpOptions);
  }

  addSetCSV(data: any): Observable<any> {
    const httpOptionsUpload = {
<<<<<<< HEAD
      headers: new HttpHeaders({ Accept: 'application/json' }),
=======
      headers: new HttpHeaders({ 'Accept': 'application/json' }),
>>>>>>> main
    };
    return this.http.post(`${baseUrl}/api/csv/upload`, data, httpOptionsUpload);
  }

  getAllSets(): Observable<any> {
    return this.http.get(`${baseUrl}/api/sets`, httpOptions);
  }

  getSet(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/set/${id}`, httpOptions);
  }

  deleteSet(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/api/deleteset/${id}`, httpOptions);
  }

  editFlashcard(requestBody: any, id: number): Observable<any> {
<<<<<<< HEAD
    return this.http.put(
      `${baseUrl}/api/editFlashcard/${id}`,
      requestBody,
      httpOptions
    );
  }

  uploadFile(requestBody: any, id: number): Observable<any> {
    return this.http.post(`${baseUrl}/upload/${id}`, requestBody, {
      reportProgress: true,
      responseType: 'json',
    });
=======
    return this.http.put(`${baseUrl}/api/editFlashcard/${id}`, requestBody, httpOptions);
>>>>>>> main
  }

  deleteFlashcard(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/api/deleteCard/${id}`, httpOptions);
  }

  addNewFlashcard(data: any, id: number): Observable<any> {
    return this.http.post(`${baseUrl}/api/add_set/${id}`, data, httpOptions);
  }
}
