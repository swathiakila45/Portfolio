import logger from '@/lib/logger';

export default function Home() 
  {
  logger.info({ event: 'page_view', page: 'home' });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello, Recruiter</h1>
      <p className="mt-4 text-xl">My Portfolio is loading...</p>
    </main>
  )
}