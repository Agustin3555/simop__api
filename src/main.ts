import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('v1')
  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
