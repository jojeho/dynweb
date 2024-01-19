-- CreateTable
CREATE TABLE "Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL,
    "header" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Section" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL,
    "pageId" INTEGER NOT NULL,
    "header" TEXT NOT NULL,
    CONSTRAINT "Section_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Container" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "header" TEXT NOT NULL,
    CONSTRAINT "Container_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HTML" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    CONSTRAINT "HTML_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CSS" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    CONSTRAINT "CSS_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Example" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "containerId" INTEGER NOT NULL,
    "property" TEXT NOT NULL,
    CONSTRAINT "Example_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
