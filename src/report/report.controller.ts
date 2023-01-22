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
import { reportService } from './report.service';
import {
  CreateReportDto,
  reportResponseDto,
  UpdateReportDto,
} from '../dtos/report.dto';

@Controller('report/:type')
export class reportController {
  constructor(private readonly reportService: reportService) {}

  //Get All
  @Get('')
  getAllReports(
    @Param('type', new ParseEnumPipe(reportType)) type: string,
  ): reportResponseDto[] {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.reportService.getAllReports(ReportType);
  }

  //Get By Id
  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(reportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): reportResponseDto {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.reportService.getReportById(ReportType, id);
  }

  //Post
  @Post()
  createReport(
    @Body() { source, amount }: CreateReportDto,
    @Param('type', new ParseEnumPipe(reportType)) type: string,
  ): reportResponseDto {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.reportService.createReport({ source, amount }, ReportType);
  }

  //Update
  @Put(':id')
  updateReport(
    @Body() { source, amount }: UpdateReportDto,
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(reportType)) type: string,
  ): reportResponseDto {
    const ReportType =
      type === 'income' ? reportType.INCOME : reportType.EXPENSE;
    return this.reportService.updateReport({ source, amount }, id, ReportType);
  }

  //Delete
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id);
  }
}
