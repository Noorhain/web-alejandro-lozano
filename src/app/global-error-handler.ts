import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorService} from "./services/error.service";
import {NotificationsService} from "./services/notifications.service";

@Injectable()
export class GlobalErrorHandler implements  ErrorHandler {

  constructor(private injector: Injector) {
  }

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const notifier = this.injector.get(NotificationsService);

    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) {
      // Server Error
      message = errorService.getServerMessage(error);
      stackTrace = errorService.getServerStack(error);
      notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      notifier.showError(message);
    }
    console.error(error);
  }
}
