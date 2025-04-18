// app/protected/page.tsx
import { getAuthCookie } from "../../../../lib/cookies";
import { createSupabaseClient } from "../../../../lib/supabase";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const token = getAuthCookie();
  if (!token) redirect("/login");

  const supabase = createSupabaseClient(token);
  const { data: user, error } = await supabase.auth.getUser();

  if (error || !user) redirect("/login");

  return (
    <div className="p-6">
      <h1 className="text-xl">Welcome {user.email}</h1>
    </div>
  );
}
