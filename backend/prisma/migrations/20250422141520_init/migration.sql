-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "barber" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "wasCanceled" BOOLEAN NOT NULL,
    "isConcluded" BOOLEAN NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);
