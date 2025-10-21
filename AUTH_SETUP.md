# Authentication Setup Guide

This project uses [BetterAuth](https://www.better-auth.com/) with PostgreSQL for authentication.

## Prerequisites

1. **PostgreSQL Database**: You need a running PostgreSQL instance
2. **Node.js**: Version 20 or higher
3. **npm**: Package manager

## Environment Configuration

1. Copy and configure `.env.local` with your database credentials:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# BetterAuth Configuration
BETTER_AUTH_SECRET="your-secret-key-here-min-32-chars-long-change-this-in-production"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Important Notes:
- Replace `username`, `password`, and `your_database_name` with your actual PostgreSQL credentials
- Generate a secure secret for `BETTER_AUTH_SECRET` (minimum 32 characters)
- For production, update `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` to your actual domain

## Database Setup

BetterAuth will automatically create the required database tables on first run:
- `user` - Stores user account information
- `session` - Manages user sessions
- `account` - Handles authentication provider data

No manual migration is needed for initial setup.

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication Features

### Implemented:
- ✅ Email/password registration
- ✅ Email/password login
- ✅ Session management with cookies
- ✅ Protected routes (example: `/dashboard`)
- ✅ Logout functionality
- ✅ Form validation
- ✅ Error handling

### Routes:
- `/` - Homepage with sign up and login buttons
- `/sign-up` - User registration page
- `/login` - User login page
- `/dashboard` - Protected dashboard (requires authentication)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts          # BetterAuth API endpoints
│   ├── sign-up/
│   │   └── page.tsx                  # Registration page
│   ├── login/
│   │   └── page.tsx                  # Login page
│   ├── dashboard/
│   │   └── page.tsx                  # Protected dashboard
│   └── page.tsx                      # Homepage
├── lib/
│   ├── auth.ts                       # Server-side auth configuration
│   └── auth-client.ts                # Client-side auth utilities
└── components/
    └── ui/
        ├── button.tsx                # Button component
        ├── input.tsx                 # Input component
        └── label.tsx                 # Label component
```

## Usage Examples

### Sign Up a New User
1. Navigate to `/sign-up`
2. Enter name, email, and password (minimum 8 characters)
3. Click "Sign Up"
4. Redirected to `/dashboard` on success

### Login
1. Navigate to `/login`
2. Enter your email and password
3. Click "Log In"
4. Redirected to `/dashboard` on success

### Logout
1. Click "Logout" button on the dashboard
2. Session is cleared and redirected to homepage

## Security Considerations

- Passwords are hashed using BetterAuth's built-in security
- Sessions are stored securely with HTTP-only cookies
- CSRF protection is enabled by default
- Email verification is disabled (set `requireEmailVerification: true` to enable when email service is configured)

## Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running: `psql -U username -d database_name`
- Check `DATABASE_URL` format in `.env.local`
- Ensure database exists and user has proper permissions

### Authentication Errors
- Check browser console for detailed error messages
- Verify all environment variables are set correctly
- Clear browser cookies and try again

## Next Steps

Consider implementing:
- Email verification
- Password reset functionality
- OAuth providers (Google, GitHub, etc.)
- Two-factor authentication (2FA)
- Account settings page
- Profile management

## Resources

- [BetterAuth Documentation](https://www.better-auth.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
