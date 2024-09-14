import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://ai_app_owner:VSEJpuey3F2k@ep-withered-flower-a2aj1six.eu-central-1.aws.neon.tech/ai_app?sslmode=require"
);
export const db = drizzle(sql, { schema });
