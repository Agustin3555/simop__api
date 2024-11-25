import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { map, Observable } from 'rxjs'

@Injectable()
export class NullToUndefinedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => this.transformNullToUndefined(data)))
  }

  private transformNullToUndefined(data: any): any {
    // Si es null, retorna undefined
    if (data === null) return undefined

    // Si es una instancia de Date, no la transformamos
    if (data instanceof Date) return data

    // Si es un array, recursivamente procesa los elementos
    if (Array.isArray(data))
      return data.map(item => this.transformNullToUndefined(item))

    // Si es un objeto (pero no Date), recursivamente procesa las propiedades
    if (typeof data === 'object' && data !== null) {
      const transformed = {}

      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key))
          transformed[key] = this.transformNullToUndefined(data[key])
      }

      return transformed
    }

    return data
  }
}
