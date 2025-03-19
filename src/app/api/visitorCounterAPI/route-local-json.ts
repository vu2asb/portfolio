import { promises as fs } from "fs";
import path from "path";

const filePath = path.resolve("visitorCount.json");

export async function GET() {
  try {
    let visitorCount = 0;

    // Check if the file exists and read it
    try {
      const data = await fs.readFile(filePath, "utf-8");
      visitorCount = JSON.parse(data).count || 0;
    } catch (error) {
      console.error("Error reading file (might not exist yet):", error);
    }

    // Increment visitor count
    visitorCount += 1;

    // Write the updated count to the file
    await fs.writeFile(filePath, JSON.stringify({ count: visitorCount }, null, 2), "utf-8");

    return new Response(JSON.stringify({ count: visitorCount }), { status: 200 });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return new Response(JSON.stringify({ error: "Failed to read/write file" }), { status: 500 });
  }
}
