import { getAllGames, createGame } from "../repo/gamesRepo";  

export async function GET(request) {
    try {
        const games = await getAllGames();
        return new Response(JSON.stringify(games), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching games" }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const newGame = await createGame(data);
        return new Response(JSON.stringify(newGame), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error creating game" }), { status: 500 });
    }
}
