import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        {/* Welcome Message */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
            Welcome
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Get started by creating an account or logging in to your existing account.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
          <Button size="lg" className="text-lg">
            Sign Up
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Login
          </Button>
        </div>
      </main>
    </div>
  );
}
