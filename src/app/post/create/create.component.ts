import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
form!: FormGroup;
constructor(public postService:PostService,
  private router:Router){
  }
  ngOnInit():void{
    this.form=new FormGroup({
      id: new FormControl('',[Validators.required]),
      nombrecarrera: new FormControl('',Validators.required),
      estado: new FormControl('',Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((
      res:any)=>{
        console.log('Carrera Universitaria  creada!');
        this.router.navigateByUrl('post/index');
      })
  }
}
