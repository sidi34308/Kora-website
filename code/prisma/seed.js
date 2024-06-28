const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: "64928f32a9b40a55a3b1c857",
        name: "John Doe",
        phoneNumber: "1234567890",
        role: "player",
        Password: "password1",
        registeredGames: []
      },
      {
        id: "64928f32a9b40a55a3b1c858",
        name: "Jane Smith",
        phoneNumber: "0987654321",
        role: "player",
        Password: "password2",
        registeredGames: []
      }
    ]
  });

  await prisma.organizer.createMany({
    data: [
      {
        id: "64928f32a9b40a55a3b1c859",
        name: "Alice Johnson",
        phoneNumber: "1122334455",
        Password: "password3",
        organizedGames: []
      },
      {
        id: "64928f32a9b40a55a3b1c860",
        name: "Bob Brown",
        phoneNumber: "5566778899",
        Password: "password4",
        organizedGames: []
      }
    ]
  });

  await prisma.game.createMany({
    data: [
      {
        id: "64928f32a9b40a55a3b1c861",
        fieldLocation: "Field 1",
        dateTime: new Date(),
        skillLevel: "Beginner",
        maxPlayers: 10,
        feesPerPerson: 20,
        registeredPlayers: [],
        organizerId: "64928f32a9b40a55a3b1c859"
      },
      {
        id: "64928f32a9b40a55a3b1c862",
        fieldLocation: "Field 2",
        dateTime: new Date(),
        skillLevel: "Intermediate",
        maxPlayers: 15,
        feesPerPerson: 25,
        registeredPlayers: [],
        organizerId: "64928f32a9b40a55a3b1c860"
      }
    ]
  });
}

main()
  .then(() => {
    console.log('Database seeded successfully!');
  })
  .catch((e) => {
    console.error('Error seeding database:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
