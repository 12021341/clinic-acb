-- Preserve data from the original patient contact columns.
ALTER TABLE "patients" RENAME COLUMN "contactNumber" TO "mobileNumber";
ALTER TABLE "patients" RENAME COLUMN "address" TO "homeAddress";
ALTER TABLE "patients" RENAME COLUMN "emergencyContactPhone" TO "emergencyContactNumber";

-- Add a clinic-facing patient identifier. Existing records receive a stable,
-- unique identifier derived from their internal UUID.
ALTER TABLE "patients" ADD COLUMN "patientId" TEXT;
UPDATE "patients"
SET "patientId" = 'PT-' || UPPER(REPLACE("id", '-', ''));
ALTER TABLE "patients" ALTER COLUMN "patientId" SET NOT NULL;

-- Add the remaining demographic, family, emergency, and clinical fields.
ALTER TABLE "patients"
ADD COLUMN "age" INTEGER,
ADD COLUMN "emailAddress" TEXT,
ADD COLUMN "fatherName" TEXT,
ADD COLUMN "fatherAge" INTEGER,
ADD COLUMN "fatherOccupation" TEXT,
ADD COLUMN "fatherContactNumber" TEXT,
ADD COLUMN "motherName" TEXT,
ADD COLUMN "motherAge" INTEGER,
ADD COLUMN "motherOccupation" TEXT,
ADD COLUMN "motherContactNumber" TEXT,
ADD COLUMN "emergencyContactRelationship" TEXT,
ADD COLUMN "emergencyPreferredHospital" TEXT,
ADD COLUMN "bloodType" TEXT,
ADD COLUMN "philHealthInsuranceId" TEXT,
ADD COLUMN "conditions" TEXT;

CREATE UNIQUE INDEX "patients_patientId_key" ON "patients"("patientId");
