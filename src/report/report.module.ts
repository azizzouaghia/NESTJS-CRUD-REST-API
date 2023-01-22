import { Module } from '@nestjs/common';
import { reportController } from './report.controller';
import { reportService } from './report.service';

@Module({
  controllers: [reportController],
  providers: [reportService],
  exports: [reportService],
})
export class ReportModule {}
