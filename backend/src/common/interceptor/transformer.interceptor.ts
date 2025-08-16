// src/common/interceptors/transformer.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (context.getType() !== 'http') {
      return next.handle();
    }

    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    return next.handle().pipe(
      map((result) => {
        const statusCode: number = response.statusCode ?? 200;
        const method: string = (request?.method ?? 'GET').toUpperCase();
        const entity = this._extractEntityFromPath(request?.path ?? '');

        if (result && typeof result === 'object') {
          const hasMessage = 'message' in result;
          const hasData = 'data' in result;

          if (hasMessage || hasData) {
            const message =
              result.message ?? this._defaultMessage(method, entity, result);
            const data = result.data ?? this._stripMessage(result);
            return {
              statusCode,
              success: true,
              message,
              data,
            };
          }
        }

        if (typeof result === 'string') {
          return {
            statusCode,
            success: true,
            message: result,
          };
        }

        const message = this._defaultMessage(method, entity, result);
        return {
          statusCode,
          success: true,
          message,
          data: result,
        };
      }),
    );
  }

  private _defaultMessage(method: string, entity: string, data: any): string {
    switch (method) {
      case 'POST':
        return `${entity} created successfully`;
      case 'PUT':
      case 'PATCH':
        return `${entity} updated successfully`;
      case 'DELETE':
        return `${entity} deleted successfully`;
      case 'GET':
      default:
        return Array.isArray(data)
          ? `${entity} list retrieved successfully`
          : `${entity} retrieved successfully`;
    }
  }

  private _extractEntityFromPath(path: string): string {
    // Extract first path segment after "/"
    const match = path.match(/^\/?([^/]+)/);
    const entityMap: Record<string, string> = {
      events: 'Event',
      event: 'Event',
      tickets: 'Ticket',
      ticket: 'Ticket',
      payments: 'Payment',
      payment: 'Payment',
      admins: 'Admin',
      admin: 'Admin',
      attendees: 'Attendee',
      attendee: 'Attendee',
    };

    const rawEntity = match ? match[1].toLowerCase() : 'Resource';
    return entityMap[rawEntity] || 'Resource';
  }

  private _stripMessage(obj: Record<string, any>) {
    const { message, ...rest } = obj;
    return rest;
  }
}
