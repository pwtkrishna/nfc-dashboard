import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const res = await fetch("https://nfc.aardana.com/api/get-user-details", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: data.message || "Failed to fetch user details" },
      { status: res.status }
    );
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const profile = await req.json();

  const res = await fetch("https://nfc.aardana.com/api/user-profiles", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: data.message || "Failed to update user profile" },
      { status: res.status }
    );
  }

  return NextResponse.json(data);
}
export async function DELETE(request: Request) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Parse the request body to get the ID
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      { error: "Profile ID is required" },
      { status: 400 }
    );
  }

  const res = await fetch(`https://nfc.aardana.com/api/user-profiles/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: data.message || "Failed to delete user profile" },
      { status: res.status }
    );
  }

  return NextResponse.json(data);
}
