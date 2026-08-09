-- CreateTable
CREATE TABLE "medical_certificates" (
    "id" TEXT NOT NULL,
    "patientId" TEXT,
    "patientName" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "certificateDate" DATE NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medical_certificates_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "medical_certificates_patientId_certificateDate_idx" ON "medical_certificates"("patientId", "certificateDate");
CREATE INDEX "medical_certificates_doctorId_certificateDate_idx" ON "medical_certificates"("doctorId", "certificateDate");

ALTER TABLE "medical_certificates" ADD CONSTRAINT "medical_certificates_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "medical_certificates" ADD CONSTRAINT "medical_certificates_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
