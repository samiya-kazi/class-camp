import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  rootUrl = 'https://api.cloudinary.com/v1_1/dmpn6t2jn/image/upload'

  constructor(private http: HttpClient) { }

  cloudUpload (file: File, id: string) {

    const file_name = file.name.split('.')[0];
    const public_id = id + '_' + Date.now() + '_' + file_name;

    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "rcqrwjbn");
    formData.append("public_id", public_id);

    return this.http.post(this.rootUrl, formData);
  }
}
