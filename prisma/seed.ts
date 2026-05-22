import prisma from "./client";

async function main() {
  await prisma.event.deleteMany();
  await prisma.categoryEvent.deleteMany();
  await prisma.pembicara.deleteMany();

  const category1 = await prisma.categoryEvent.create({
    data: { nama: "Seminar", deskripsi: "Event seminar kampus" }
  });

  const category2 = await prisma.categoryEvent.create({
    data: { nama: "Workshop", deskripsi: "Event praktik langsung" }
  });

  const speaker1 = await prisma.pembicara.create({
    data: { nama: "Budi Santoso", keahlian: "Web Development", email: "budi@example.com" }
  });

  const speaker2 = await prisma.pembicara.create({
    data: { nama: "Siti Aminah", keahlian: "UI/UX Design", email: "siti@example.com" }
  });

  await prisma.event.createMany({
    data: [
      {
        judul: "Seminar Teknologi Web",
        deskripsi: "Pengenalan teknologi web modern",
        tanggal: new Date("2026-06-15"),
        lokasi: "Aula Kampus",
        categoryId: category1.id,
        pembicaraId: speaker1.id
      },
      {
        judul: "Workshop UI/UX",
        deskripsi: "Belajar desain antarmuka sederhana",
        tanggal: new Date("2026-06-20"),
        lokasi: "Lab Komputer",
        categoryId: category2.id,
        pembicaraId: speaker2.id
      }
    ]
  });
}

main()
  .then(async () => {
    console.log("Seed berhasil");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
