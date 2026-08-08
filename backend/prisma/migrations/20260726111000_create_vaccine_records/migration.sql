CREATE TABLE "vaccine_records" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "vaccineName" TEXT NOT NULL,
    "dose" TEXT NOT NULL,
    "dateAdministered" DATE NOT NULL,
    "manufacturer" TEXT,
    "lotNumber" TEXT,
    "administeredBy" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vaccine_records_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "vaccine_records_patientId_dateAdministered_idx"
ON "vaccine_records"("patientId", "dateAdministered");

CREATE INDEX "vaccine_records_vaccineName_idx"
ON "vaccine_records"("vaccineName");

ALTER TABLE "vaccine_records"
ADD CONSTRAINT "vaccine_records_patientId_fkey"
FOREIGN KEY ("patientId") REFERENCES "patients"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;
