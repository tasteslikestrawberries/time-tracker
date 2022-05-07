import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  reqCount = 0;

  constructor(private spinner: NgxSpinnerService) { }

  intercept( request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.reqCount++;
    this.spinner.show();

    return next.handle(request).pipe(
      finalize(() => {
        // decrement when a req is completed (successful/failed both handled when using finalize operator)
        this.reqCount--;
        if (this.reqCount === 0) {
          setTimeout( () => this.spinner.hide(), 300)
        }

      })
    );
  }

}
