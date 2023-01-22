/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { reportType } from 'src/data';
import { reportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {

    constructor(private readonly reportService:reportService){}

    calculateSummary(){

        const totalExpense = this.reportService.getAllReports(reportType.EXPENSE).reduce((sum,report)=>sum+report.amount,0);
        const totalIncome = this.reportService.getAllReports(reportType.INCOME).reduce((sum,report)=>sum+report.amount,0);
        return {
            totalIncome,
            totalExpense,
            netIncome: totalIncome-totalExpense,
        }
    }
}
