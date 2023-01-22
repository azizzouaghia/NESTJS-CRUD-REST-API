/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";

export class customInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler)
    {
        return next.handle().pipe(
            map((data)=>{
                return data;
            })
        )
    }
    
}