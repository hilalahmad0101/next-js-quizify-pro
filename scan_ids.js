const { prisma } = require('./prisma.config.js');

async function main() {
  try {
    const quizzes = await prisma.quiz.findMany({
      select: { id: true, title: true }
    });
    console.log("Registered Quizzes in DB:", quizzes);
  } catch (err) {
    console.error("DB Scan Failure:", err.message);
  } finally {
    process.exit(0);
  }
}

main();
