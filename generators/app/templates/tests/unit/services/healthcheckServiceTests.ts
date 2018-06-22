import 'mocha'
import { assert } from 'chai'
import { HealthcheckService } from '../../../src/services/healthcheckService'

describe('HealthcheckService', () => {
  let service: HealthcheckService

  beforeEach(() => {
    service = new HealthcheckService()
  })

  describe('isHealthy', () => {
    it('should resolve true if all dependencies are healthy', async () => {
      let isHealthy: boolean = await service.isHealthy()

      assert.isTrue(isHealthy)
    })
  })
})
