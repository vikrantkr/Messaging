// This file is deprecated. All data fetching and mutation logic has been
// moved to src/app/actions.ts using Next.js Server Actions for better
// performance and a simpler architecture.
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ error: 'This API endpoint is deprecated.' }, { status: 410 });
}
export async function POST() {
    return NextResponse.json({ error: 'This API endpoint is deprecated.' }, { status: 410 });
}
export async function DELETE() {
    return NextResponse.json({ error: 'This API endpoint is deprecated.' }, { status: 410 });
}
