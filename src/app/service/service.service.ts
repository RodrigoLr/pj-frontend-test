import { environment } from './../../environments/environment';

export class Service {

  apiUrl = environment.apiUrl;
  apiSpritesUrl = environment.apiSpritesUrl;

  constructor() { }

  extractParams(params: object): string {
    let urlParams = '';
    Object.keys(params).forEach(key => {
      urlParams += urlParams ? '&' : '?';
      urlParams += key + '=' + encodeURIComponent(params[key]);
    });

    return urlParams;
  }

}
