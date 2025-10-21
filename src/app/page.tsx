export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        {/* Welcome Message */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
            Welcome
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
            Get started by creating an account or logging in to your existing account.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
            Sign Up
          </button>
          <button className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold py-3 px-8 rounded-lg border-2 border-indigo-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400">
            Login
          </button>
        </div>
      </main>
    </div>
  );
}
