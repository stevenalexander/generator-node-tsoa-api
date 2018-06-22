import { Get, Route, Controller, SuccessResponse, Response } from 'tsoa'
import { provideSingleton } from '../ioc'
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { inject } from 'inversify'
import { HealthcheckService } from '../services/healthcheckService'

@Route('healthcheck')
@provideSingleton(HealthcheckController)
export class HealthcheckController extends Controller {
    constructor(@inject(HealthcheckService) private healthcheckService: HealthcheckService) { super() }

    @Get()
    @SuccessResponse(200, 'Healthy')
    @Response(500, 'Unhealthy')
    public async healthcheck(): Promise<void> {
        let isHealthy: boolean = await this.healthcheckService.isHealthy()

        this.setStatus(isHealthy ? OK : INTERNAL_SERVER_ERROR)

        return Promise.resolve()
    }
}
