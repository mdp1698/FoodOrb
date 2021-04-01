import { User } from 'src/app/registration/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user:User|null;
  updateForm:FormGroup;

  constructor(private _userService:UserService, private fb:FormBuilder) { 
    this.user = null;
    this.updateForm = fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      phone:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }

  onEdit(){
    if(this.user != null){
      console.log(this.user);
      this.user.name = this.updateForm.get("name")?.value;
      this.user.email = this.updateForm.get("email")?.value;
      this.user.password = this.updateForm.get("password")?.value;
      this._userService.updateUser(this.user).then(
        (response) => {
          if(response == true){

            alert("User successfully updated!");
          }
        }
      )
    }
  }

  ngOnInit(): void {
    this._userService.getLoggedInUserFromSession().subscribe(
      (data)=>{
        this.user = data;
        this.updateForm.controls["name"].setValue(data?.name);
        this.updateForm.controls["email"].setValue(data?.email);
        this.updateForm.controls["password"].setValue(data?.password);
      }
    )
  }

}
