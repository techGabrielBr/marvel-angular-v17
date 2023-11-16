import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpHandlerFn
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../../../shared/services/loading/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  let activeRequests = 0;
  let loadingService = inject(LoadingService);

  if(activeRequests == 0){
    loadingService.show();
  }

  activeRequests++;

  return next(req).pipe(
    finalize(() => {
      activeRequests --;

      if(activeRequests == 0){
        loadingService.hide();
      }
    })
  )
}

