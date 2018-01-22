import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

/**
 * TODO add different tpye of message such as info, notice, success, warning and error.
 * Tips: use panelClass
 */
@Injectable()
export class MessageService {

  constructor(private matSnackBar: MatSnackBar) { }

  message(text: string, action: string = 'CLOSE', config?: MatSnackBarConfig) {
    let defaultConfig = this.defaultMatSnackConfig();
    config = {...defaultConfig, ...config};

    return this.matSnackBar.open(text, action, config)
  }

  defaultMatSnackConfig(): MatSnackBarConfig{
    let defaultConfig = new MatSnackBarConfig;
    // defaultConfig.duration = 3000;

    return defaultConfig;
  }

  /**
   * example
   * @param text
   * @param action
   * @param config
   */
  info(text: string, action: string = 'CLOSE', config?: MatSnackBarConfig) {
    config = {...{panelClass: 'info'}, ...config};

    return this.message(text, action, config);
  }

}
