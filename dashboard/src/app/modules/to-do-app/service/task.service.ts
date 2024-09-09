import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3042/api/data';
  constructor(private http:HttpClient) { 
  }
  getTaskList(): Observable<any> {     
    return this.http.get<any>(this.apiUrl); 
  }

  deleteData(id: any): Observable<any> {    
    return this.http.delete<any>(`${this.apiUrl}/${id}`); 
  }

  addData(newData:any): Observable<any> { 
    return this.http.post<any>(this.apiUrl, newData, { responseType: 'json' }); 
  }

  editData(id: number, data: any): Observable<any> {    
    return this.http.put<any>(`${this.apiUrl}/${id}`, data); 
  }
}
