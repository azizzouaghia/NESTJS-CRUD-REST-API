import { Test, TestingModule } from '@nestjs/testing';
import { reportService } from './report.service';

describe('ReportService', () => {
  let service: reportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [reportService],
    }).compile();

    service = module.get<reportService>(reportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
