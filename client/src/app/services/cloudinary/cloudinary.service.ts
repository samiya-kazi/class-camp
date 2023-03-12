import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  rootUrl = environment.cloudinaryRootUrl;

  constructor(private http: HttpClient) { }

  cloudUpload (file: File, id: string) {

    const file_name = file.name.split('.')[0];
    const public_id = id + '_' + Date.now() + '_' + file_name;

    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", environment.cloudinaryPreset);
    formData.append("public_id", public_id);

    return this.http.post(this.rootUrl, formData);
  }
}
