import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  data;
  weatherData;
  public weatherSearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService:DataService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  onSubmit(){
    this.dataService.getWeather().subscribe(x=>{
      this.data=x;
      for(let i=0;i<this.data.length;i++){
        if(this.data[i].location==this.weatherSearchForm.value.location){
        this.weatherData=this.data[i].weather.place;
        }
        else{
          console.log(this.data[i].weather)
        }
      }
    })
    
  }
}
