import { reportType, data } from 'src/data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { reportResponseDto } from '../dtos/report.dto';

interface reportData {
  source: string;
  amount: number;
}
interface upReportData {
  source?: string;
  amount?: number;
}
@Injectable()
export class reportService {
  //Get All Reports
  getAllReports(type: reportType): reportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new reportResponseDto(report));
  }

  //Get Report By Id
  getReportById(type: reportType, id: string): reportResponseDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;
    return new reportResponseDto(report);
  }

  //Create Report
  createReport(
    { source, amount }: reportData,
    type: reportType,
  ): reportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type,
    };
    data.report.push(newReport);
    return new reportResponseDto(newReport);
  }

  //Update Report
  updateReport(
    { source, amount }: upReportData,
    id: string,
    type: reportType,
  ): reportResponseDto {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex((report) => report.id === id);
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      source,
      amount,
      updatedAt: new Date(),
    };
    return new reportResponseDto(data.report[reportIndex]);
  }

  //Delete By Id
  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
