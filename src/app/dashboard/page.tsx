"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with Logout Button */}
      <header className="flex justify-end p-6 border-b">
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="max-w-2xl space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Welcome to Your Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              You&apos;re successfully logged in. This is your personal dashboard.
            </p>
          </div>

          <div className="rounded-lg border border-border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Your Account</h2>
            
            <div className="space-y-2">
              <div>
                <span className="font-medium">Name:</span>{" "}
                <span className="text-muted-foreground">{session.user?.name || "N/A"}</span>
              </div>
              <div>
                <span className="font-medium">Email:</span>{" "}
                <span className="text-muted-foreground">{session.user?.email}</span>
              </div>
              <div>
                <span className="font-medium">User ID:</span>{" "}
                <span className="text-muted-foreground font-mono text-sm">{session.user?.id}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
