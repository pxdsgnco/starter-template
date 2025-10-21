import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with Logout Button */}
      <header className="flex justify-end p-6 border-b">
        <Button variant="outline">
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="max-w-2xl text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            You're successfully logged in. This is your personal dashboard.
          </p>
        </div>
      </main>
    </div>
  );
}
