import 'mocha'
import { mock, instance, when, verify } from 'ts-mockito'
import { HealthcheckService } from '../../../src/services/healthcheckService'
import { HealthcheckController } from '../../../src/controllers/healthcheckController'
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes'

describe('HealthcheckController', () => {
  let healthcheckController: HealthcheckController

  let healthcheckService: HealthcheckService

  beforeEach(() => {
    healthcheckService = mock(HealthcheckService)

    healthcheckController = new HealthcheckController(instance(healthcheckService))
  })

  describe('healthcheck', () => {
    it('should return an OK response if all dependencies are healthy', async () => {
      when(healthcheckService.isHealthy()).thenReturn(Promise.resolve(true))

      await healthcheckController.healthcheck()

      verify(healthcheckController.setStatus(OK))
    })

    it('should return an Internal Server Error response if all dependencies are not healthy', async () => {
      when(healthcheckService.isHealthy()).thenReturn(Promise.resolve(false))

      await healthcheckController.healthcheck()

      verify(healthcheckController.setStatus(INTERNAL_SERVER_ERROR))
    })
  })
})
