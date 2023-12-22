import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  url: string = 'certificates';

constructor(private http: HttpClient) { }

getCertificates() {
  return this.http.get(environment?.apiUrl + this.url, {params: {'populate': '*'}}).pipe(map((res: any) => {
    res = res.data.sort((x, y) => x.attributes.certificate_id - y.attributes.certificate_id);

    return res;
  }))
}
}
