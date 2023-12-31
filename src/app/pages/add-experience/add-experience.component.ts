import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  name: any;
  experience: any;
  constructor(private http: HttpClient) {

    }

  ngOnInit(): void {
    
  }

  submit() {
    let bodyData = {
      name: this.name,
      experience: this.experience,
    };
    this.http
      .post('https://adishaktiadimayabackend.in/api/createExperience', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Data Saved Successfully');

        this.name, this.experience;
      });
  }
}
