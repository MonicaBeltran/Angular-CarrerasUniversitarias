import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Asegúrate de importar las clases necesarias
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL="http://localhost:8090/apica/carreras";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    }) 
  }
  constructor(private httpClient:HttpClient) { 
  }
  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(post:Post):Observable<any>{
    return this.httpClient.post(this.apiURL,JSON.stringify(post),
      this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  find(id:number):Observable<any> {
    console.log("resulado1"+this.apiURL +'/'+ id)
    return this.httpClient.get(this.apiURL +'/'+ id)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  update(id:number, post:Post): Observable<any>{
    return this.httpClient.put(this.apiURL +'/'+id, JSON.stringify(post), 
    this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  delete(id:number):Observable<any>{
    return this.httpClient.delete(this.apiURL+'/'+id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error:any){
    let errorMessage="";
    if(error.error instanceof Error){
      errorMessage=error.error.message;
    }else{
      errorMessage='Error Code: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(errorMessage);
  }
}