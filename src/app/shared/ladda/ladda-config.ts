import { Injectable } from '@angular/core';

// Referenced from https://github.com/moff/angular2-ladda/blob/master/projects/ladda/src/lib/ladda-config.ts

export type LaddaStyle =
  'expand-left' | 'expand-right' | 'expand-up' | 'expand-down' |
  'contract' | 'contract-overlay' | 'zoom-in' | 'zoom-out' |
  'slide-left' | 'slide-right' | 'slide-up' | 'slide-down';

export abstract class LaddaConfigArgs {
  style?: LaddaStyle;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerLines?: number;
}

export const configAttributes: { [key: string]: keyof LaddaConfigArgs } = {
  'data-style': 'style',
  'data-spinner-size': 'spinnerSize',
  'data-spinner-color': 'spinnerColor',
  'data-spinner-lines': 'spinnerLines',
};

@Injectable()
export class LaddaConfig implements LaddaConfigArgs {
  constructor(config: LaddaConfigArgs = {}) {
    Object.assign(this, config);
  }
}
