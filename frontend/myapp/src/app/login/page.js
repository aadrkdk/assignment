/*
 * Login page using static React component.
 * This code defines a simple login page with a form for users to log into their account.
 * It includes fields for email and password, with basic styling using Tailwind CSS.
 * Next.js's Link component is used for client-side navigation to the registration page.
 *
 * Concepts used:
 * - React functional components
 * - JSX syntax for defining UI elements
 * - Next.js Link component for client-side navigation
 * - Tailwind CSS for styling
 * - Basic form structure and input handling
 *
 * Suggested Improvements:
 * - Implement form validation for better user experience and data integrity.
 * - Add state management using React's useState hook to handle form inputs and submission.
 * - Implement error handling and display feedback messages to users.
 * - Use environment variables for sensitive data and configurations.
 */

import Link from "next/link";

const LoginPage = () => {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-2">
        <form>
          <div className="container mx-auto max-w-md p-4">
            <h1 className="text-2xl font-bold">Login</h1>
            <p>Please fill in this form to log into your account.</p>
            <hr className="mb-4" />

            <label className="block mb-1">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-1">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <hr className="mb-4" />

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            >
              Login
            </button>
          </div>

          <div className="container mx-auto max-w-md p-4">
            <p className="mb-4">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500">
                Register
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
