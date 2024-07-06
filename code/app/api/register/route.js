// app/api/register/route.js
import { NextResponse } from 'next/server';
import prisma from '@/app/util/prisma';

export async function POST(request) {
    try {
        const { gameId, name, email, phone } = await request.json();
        const newuser = [ name, email, phone ];
        const game = await prisma.game.update({
            where: { id: gameId },
            data: {
              registeredPlayers: {
                push: newuser
              }
            }
          });
        return new Response(JSON.stringify(game), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error creating organizer" }), { status: 400 });
    }
}
