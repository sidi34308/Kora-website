import prisma from "@/app/util/prisma";

export async function getAllOrganizers() {
    return prisma.organizer.findMany();
}

export async function getOrganizer(id) {
    return prisma.organizer.findUnique({
        where: {
            id: id,
        },
        include: {
            organizedGames: true,
        },
    });
}

export async function createOrganizer(data) {
    return prisma.organizer.create({
        data: data,
    });
}

export async function updateOrganizer(id, data) {
    return prisma.organizer.update({
        where: {
            id: id,
        },
        data: data,
    });
}

export async function deleteOrganizer(id) {
    return prisma.organizer.delete({
        where: {
            id: id,
        },
    });
}
