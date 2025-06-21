import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { BroadcastList } from '@/components/broadcast-list';

export default function BroadcastsPage() {
  return (
    <div className="relative min-h-screen">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center pt-12 mb-12">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
                Active Broadcasts
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                This page displays and manages all active messages shown to users.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/">
                <ArrowLeft className="mr-2" />
                Back to Generator
              </Link>
            </Button>
        </div>
        <BroadcastList />
      </main>
      <footer className="text-center py-8 text-sm text-muted-foreground">
        Powered by Firebase.
      </footer>
    </div>
  );
}
