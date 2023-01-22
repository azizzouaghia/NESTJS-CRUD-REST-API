/* eslint-disable prettier/prettier */
import {IsNumber,IsPositive,IsString,IsNotEmpty,IsOptional} from 'class-validator'
import {Exclude,Expose} from 'class-transformer'
import { reportType } from 'src/data';

export class CreateReportDto {

    @IsString()
    @IsNotEmpty()
    source:string;
    
    @IsNumber()
    @IsPositive()
    amount:number;
}

export class UpdateReportDto {
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source:string;
    
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount:number;
}

export class reportResponseDto {
    id:string;
    source:string;
    amount:number;  
    createdAt:Date;
    @Exclude()
    updatedAt:Date;
    type:reportType;

    constructor(partial: Partial<reportResponseDto>){
        Object.assign(this,partial);
    }
}