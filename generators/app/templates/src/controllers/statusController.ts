import { Get, Route, Controller, SuccessResponse } from 'tsoa'
import { provideSingleton } from '../ioc'
import { OK } from 'http-status-codes'

@Route('status')
@provideSingleton(StatusController)
export class StatusController extends Controller {
    constructor() { super() }

    @Get()
    @SuccessResponse(200, 'Available')
    public status(): Promise<void> {
        this.setStatus(OK)
        return Promise.resolve()
    }
}
