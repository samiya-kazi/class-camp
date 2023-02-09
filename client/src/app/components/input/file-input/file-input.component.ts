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
  loading: boolean = false;
  @Output() fileUploadEvent = new EventEmitter()

  constructor(private cloudinary: CloudinaryService) { }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe(file => {
      this.loading = true;
      this.cloudinary.cloudUpload(file, file.name).subscribe({
        next: (res:any) => {
          this.fileUploadEvent.emit(res.secure_url as string);
          this.loading = false;
        },
        error: error => {
          this.loading = false;
        }
      });
    })
  }

}
