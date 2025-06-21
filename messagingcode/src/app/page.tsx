import { MessageGenerator } from '@/components/message-generator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 pt-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
            Broadcast Beacon
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A simple tool to broadcast messages to your users.
          </p>
          <Button asChild className="mt-8">
            <Link href="/broadcasts">
              View Active Broadcasts
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </header>
        <MessageGenerator />
      </main>
      <footer className="text-center py-8 text-sm text-muted-foreground">
        Powered by Firebase.
      </footer>
    </div>
  );
}
