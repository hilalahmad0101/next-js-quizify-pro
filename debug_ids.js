const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const quizzes = await prisma.quiz.findMany({
    select: { id: true, title: true }
  });
  console.log(JSON.stringify(quizzes, null, 2));
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
