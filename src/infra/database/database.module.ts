import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaQuestionsCommentsRepository } from './prisma/repositories/prisma-questions-comments-repository'
import { PrismaQuestionsAttachmentsCommentsRepository } from './prisma/repositories/prisma-questions-attachments-repository'
import { PrismaAnswersRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaAnswersCommentsRepository } from './prisma/repositories/prisma-answers-comments-repository'
import { PrismaAnswersAttachmentsRepository } from './prisma/repositories/prisma-answer-attachment-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    PrismaQuestionsCommentsRepository,
    PrismaQuestionsAttachmentsCommentsRepository,
    PrismaAnswersRepository,
    PrismaAnswersCommentsRepository,
    PrismaAnswersAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    PrismaQuestionsCommentsRepository,
    PrismaQuestionsAttachmentsCommentsRepository,
    PrismaAnswersRepository,
    PrismaAnswersCommentsRepository,
    PrismaAnswersAttachmentsRepository,
  ],
})
export class DatabaseModule {}