-- Reuse the existing reason data as the booking purpose.
ALTER TABLE "appointments" RENAME COLUMN "reason" TO "purpose";

-- Add the booking fields. Populate existing appointments before enforcing
-- required values so this migration preserves any records already created.
ALTER TABLE "appointments"
ADD COLUMN "date" DATE,
ADD COLUMN "time" TEXT,
ADD COLUMN "visitType" TEXT;

UPDATE "appointments"
SET
  "date" = "scheduledAt"::date,
  "time" = TO_CHAR("scheduledAt", 'HH24:MI'),
  "visitType" = 'General consultation',
  "purpose" = COALESCE("purpose", 'General consultation');

ALTER TABLE "appointments"
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "time" SET NOT NULL,
ALTER COLUMN "visitType" SET NOT NULL,
ALTER COLUMN "purpose" SET NOT NULL;
