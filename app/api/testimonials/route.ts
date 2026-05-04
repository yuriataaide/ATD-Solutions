import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const testimonials = await sql`
      SELECT id, name, role, message, rating, created_at 
      FROM testimonials 
      WHERE approved = true 
      ORDER BY created_at DESC
    `
    return NextResponse.json(testimonials)
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, role, message, rating } = body

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 })
    }

    await sql`
      INSERT INTO testimonials (name, role, message, rating, approved)
      VALUES (${name}, ${role || null}, ${message}, ${rating || 5}, false)
    `

    return NextResponse.json({ success: true, message: "Testimonial submitted for review" })
  } catch (error) {
    console.error("Error creating testimonial:", error)
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 })
  }
}
