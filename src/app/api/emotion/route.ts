import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { emotion } = await req.json();

  if (!emotion) {
    return new Response("Emotion is required", { status: 400 });
  }

  const result = await prisma.emotionEntry.create({
    data: { emotion },
  });

  return Response.json(result);
}

export async function GET() {
  const data = await prisma.emotionEntry.findMany({
    orderBy: { createdAt: "desc" },
  });
  return Response.json(data);
}