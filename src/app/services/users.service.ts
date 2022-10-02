import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDTO, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `https://young-sands-07814.herokuapp.com/api/users`;

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO)
  {
    return this.http.post(this.apiUrl, dto);
  }

  getAll()
  {
    return this.http.get< User[]>(this.apiUrl);
  }
}