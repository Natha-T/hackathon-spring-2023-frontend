-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "summonerId" TEXT,
    "wallet" TEXT,
    "isStreamer" BOOLEAN NOT NULL DEFAULT false,
    "isViewer" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stat" (
    "id" TEXT NOT NULL,
    "numOfViewers" INTEGER,
    "numOfBetsPlaced" INTEGER,
    "hoursStreamed" TIMESTAMP(3),
    "totalPayouts" DOUBLE PRECISION,
    "monthlyEarnings" DOUBLE PRECISION,
    "monthlyFee" DOUBLE PRECISION,
    "totalEarnings" DOUBLE PRECISION,
    "totalFollowers" INTEGER,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viewer" (
    "id" TEXT NOT NULL,
    "currentBet" DOUBLE PRECISION,
    "totalBet" DOUBLE PRECISION,
    "numOfBetsPlaced" INTEGER,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Viewer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Stat_userId_key" ON "Stat"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_userId_key" ON "Viewer"("userId");

-- AddForeignKey
ALTER TABLE "Stat" ADD CONSTRAINT "Stat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viewer" ADD CONSTRAINT "Viewer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
