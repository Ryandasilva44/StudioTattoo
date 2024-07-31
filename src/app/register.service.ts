import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3001/api/registers/register';

  constructor(private http: HttpClient) {}

  registerUser(user: { name: string; username: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
