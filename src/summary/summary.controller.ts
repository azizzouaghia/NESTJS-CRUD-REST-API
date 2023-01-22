/* eslint-disable prettier/prettier */
import { Controller,Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {

    constructor(private readonly SummaryService: SummaryService ){}

    @Get()
    getSummary(){
        return this.SummaryService.calculateSummary();
    }
}
