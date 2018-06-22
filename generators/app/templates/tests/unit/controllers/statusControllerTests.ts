import 'mocha'
import { verify } from 'ts-mockito'
import { StatusController } from '../../../src/controllers/statusController'
import { OK } from 'http-status-codes'

describe('StatusController', () => {
  let statusController: StatusController

  beforeEach(() => {
    statusController = new StatusController()
  })

  describe('status', () => {
    it('should return an OK response', async () => {
      await statusController.status()

      verify(statusController.setStatus(OK))
    })
  })
})
