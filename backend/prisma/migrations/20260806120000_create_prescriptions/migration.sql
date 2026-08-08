CREATE TABLE "prescriptions" (
  "id" TEXT NOT NULL,
  "patientId" TEXT NOT NULL,
  "doctorId" TEXT NOT NULL,
  "medication" TEXT NOT NULL,
  "dosage" TEXT NOT NULL,
  "instructions" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL,
  "refills" INTEGER NOT NULL DEFAULT 0,
  "status" TEXT NOT NULL DEFAULT 'DRAFT',
  "notes" TEXT,
  "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "prescriptions_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "prescriptions_patientId_issuedAt_idx" ON "prescriptions"("patientId", "issuedAt");
CREATE INDEX "prescriptions_doctorId_issuedAt_idx" ON "prescriptions"("doctorId", "issuedAt");
ALTER TABLE "prescriptions" ADD CONSTRAINT "prescriptions_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "prescriptions" ADD CONSTRAINT "prescriptions_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
