import { reportType, data } from 'src/data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

interface reportData {
  source: string;
  amount: number;
}

@Injectable()
export class AppService {
  //Get All Reports
  getAllReports(type: reportType) {
    return data.report.filter((report) => report.type === type);
  }

  //Get Report By Id
  getReportById(type: reportType, id: string) {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }

  //Create Report
  createReport({ source, amount }: reportData, type: reportType) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }

  //Update Report
  updateReport({ source, amount }: reportData, id: string, type: reportType) {
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
  }

  //Delete By Id
  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
