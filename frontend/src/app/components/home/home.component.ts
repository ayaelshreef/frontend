import { Component, OnInit } from "@angular/core";
import { IssueService } from "src/app/issue.service";

interface IPost {
  txt: string;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  photo: String = "";
  allData: Array<IPost> = [];

  title = "frontend";
  selectedFile = null;
  constructor(private http: IssueService) {}
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    this.http.getposts().subscribe((data: any) => {
      this.allData = data["message"];
    });
  }

  ngOnInit(): void {}
}
