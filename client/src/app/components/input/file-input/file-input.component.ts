import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {

  fileControl = new FormControl();
  @Output() fileUploadEvent = new EventEmitter()

  constructor(private cloudinary: CloudinaryService) { }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe(file => {
      this.cloudinary.cloudUpload(file, 'samiya').subscribe({
        next: (res:any) => {
          this.fileUploadEvent.emit(res.secure_url as string);
        }
      });
    })
  }

}
