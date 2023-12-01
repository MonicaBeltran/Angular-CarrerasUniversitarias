import { Component } from '@angular/core';
import { Post } from '../post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id!:number;
  post!:Post;
  form!:FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
    this.form= new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombrecarrera: new FormControl('',Validators.required),
      estado: new FormControl('',Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any)=>{
        console.log('Carrera actualizado exitosamente...');
        this.router.navigateByUrl('post/index');
      });
  }

}


