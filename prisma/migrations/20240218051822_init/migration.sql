-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);
