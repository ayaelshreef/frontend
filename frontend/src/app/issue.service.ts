import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { privateEncrypt } from ;
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root",
})
export class IssueService {
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getposts() {
    return this.http.get(environment.API);
  }

  addpost(photo: string) {
    return this.http.post(`${environment.API}/post`, { Photo: photo });
  }
}
