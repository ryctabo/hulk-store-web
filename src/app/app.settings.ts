export class AppSettings {

  public static get baseUrl(): string {
    return 'http://localhost:8080/api.hulkstore/v1';
  }

  public static getApiEndpoint(method: string): string {
    return `${AppSettings.baseUrl}/${method}`;
  }

}
