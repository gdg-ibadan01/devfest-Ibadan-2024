-- DropIndex
DROP INDEX "public"."payments_paystackReference_key";

-- AlterTable
ALTER TABLE "public"."payments" ALTER COLUMN "paystackReference" DROP NOT NULL;
