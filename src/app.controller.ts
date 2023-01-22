import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { reportType } from 'src/data';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Get All
  @Get('')
  getAllReports(@Param('type', new ParseEnumPipe(reportType)) type: string) {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.appService.getAllReports(ReportType);
  }

  //Get By Id
  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(reportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.appService.getReportById(ReportType, id);
  }

  //Post
  @Post()
  createReport(
    @Body() { source, amount }: { source: string; amount: number },
    @Param('type', new ParseEnumPipe(reportType)) type: string,
  ) {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.appService.createReport({ source, amount }, ReportType);
  }

  //Update
  @Put(':id')
  updateReport(
    @Body() { source, amount }: { source: string; amount: number },
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(reportType)) type: string,
  ) {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.appService.updateReport({ source, amount }, id, ReportType);
  }

  //Delete
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id);
  }
}
