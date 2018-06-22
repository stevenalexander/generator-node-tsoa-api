import 'reflect-metadata'
import { Container, interfaces, decorate, injectable } from 'inversify'
import { autoProvide, makeFluentProvideDecorator, makeProvideDecorator } from 'inversify-binding-decorators'
import { Controller } from 'tsoa'

const iocContainer = new Container()

const provide = makeProvideDecorator(iocContainer)
const fluentProvider = makeFluentProvideDecorator(iocContainer)

const provideNamed = (
  identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>,
  name: string,
) => {
    return fluentProvider(identifier)
      .whenTargetNamed(name)
      .done()
}

const provideSingleton = (
  identifier: string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>,
) => {
    return fluentProvider(identifier)
      .inSingletonScope()
      .done()
}

// Needed to make controller injectable for extended Singleton class
decorate(injectable(), Controller)

export { iocContainer, autoProvide, provide, provideSingleton, provideNamed }
