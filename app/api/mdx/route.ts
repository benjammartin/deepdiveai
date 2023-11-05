import buildIndex from "@/app/lib/get-documents"

export async function GET() {
  buildIndex()
  return Response.json({ success: true })
}