import { NextResponse } from "next/server";
import type { UserProfile } from "@/types/userProfile-type";
import { cookies } from "next/headers";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { id } = await params;
    const body: UserProfile = await request.json();

    const apiRes = await fetch(
      `https://nfc.premierwebtechservices.com/api/user-profiles/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const raw = await apiRes.text();
    let data;
    try {
      data = JSON.parse(raw);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (jsonError) {
      data = raw;
      console.error("Backend non-JSON response:", data);
      return NextResponse.json(
        { error: "Backend did not return JSON", details: data },
        { status: apiRes.status }
      );
    }

    if (!apiRes.ok) {
      console.error("Backend error:", data);
      return NextResponse.json(data, { status: apiRes.status });
    }

    return NextResponse.json(data, { status: apiRes.status });
  } catch (error) {
    console.error("PATCH /api/profile/[id] error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
}
