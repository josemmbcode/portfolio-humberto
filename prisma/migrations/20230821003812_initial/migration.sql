-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "attachment" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "duration" TEXT,
    "subcategory" TEXT NOT NULL,
    "awards" JSONB NOT NULL,
    "languages" TEXT NOT NULL,
    "credits" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");
