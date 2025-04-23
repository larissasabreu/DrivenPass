import prisma from "../config/db";

// deleta o usuário
export async function EraseUserRepository (userId: number) {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
}