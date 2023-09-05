import { db } from "~/utils/db.server";

export async function getAllProjects() {
  return await db.project.findMany();
}
