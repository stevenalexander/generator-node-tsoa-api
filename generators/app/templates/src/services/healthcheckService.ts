import { provideSingleton } from '../ioc'

@provideSingleton(HealthcheckService)
export class HealthcheckService {
  public async isHealthy(): Promise<boolean> {
    return Promise.resolve(true)
  }
}
