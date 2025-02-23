import Link from 'next/link'
export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen light-background dark:dark-background">
            <div className="text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-2xl mt-4">Page Not Found</p>
                <p className="mt-2">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className="mt-6 inline-block px-4 py-2 rounded-md">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};