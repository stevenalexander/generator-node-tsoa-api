import { FieldErrors } from 'tsoa'
import { BAD_REQUEST } from 'http-status-codes'

export class ApiValidationError extends Error {
  status: number
  fields: FieldErrors

  constructor(fields: FieldErrors) {
      super('Bad Request')
      this.status = BAD_REQUEST
      this.name = 'ValidateError'
      this.fields = fields
  }
}
