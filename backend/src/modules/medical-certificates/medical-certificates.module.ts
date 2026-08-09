import { Module } from '@nestjs/common';
import { MedicalCertificatesController } from './medical-certificates.controller';
import { MedicalCertificatesService } from './medical-certificates.service';

@Module({
  controllers: [MedicalCertificatesController],
  providers: [MedicalCertificatesService],
})
export class MedicalCertificatesModule {}
