import { PrismaClient } from '@prisma/client';

interface ArticleInfo {
  creationDate: string;
  author: string;
  views: number;
  content: string;
  title: string;
}



export async function createData(articleInfo: ArticleInfo) {
  const prisma = new PrismaClient();
  
  try {
    // 데이터 삽입
    const createdData = await prisma.article.create({
      data: {
        creationDate: articleInfo.creationDate,
        author: articleInfo.author,
        views: articleInfo.views,
        content: articleInfo.content,
        title: articleInfo.title,
      },
    });

    console.log('Created Data:', createdData);
  } catch (error) {
    console.error('Error creating data:', error);
  } finally {
    await prisma.$disconnect(); // Prisma Client 연결 해제
  }
}

// const articleInfo: ArticleInfo = {
//   creationDate: '2024-01-18',
//   author: 'John Doe',
//   views: 100,
//   content: 'This is the article content.',
//   title: 'Sample Article',
// };

