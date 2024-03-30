import { AnswerAttachmentRepository } from '@/domain/forum/application/repositories/answer-attachment-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

export class InMemoryAnswerAttachmentsRepository
  implements AnswerAttachmentRepository
{
  public items: AnswerAttachment[] = []

  async deleteManyByAnswerId(answerId: string): Promise<void> {
    const answerAttachment = this.items.filter(
      (item) => item.answerId.toString() !== answerId,
    )

    this.items = answerAttachment
  }

  async findManyByAnswerId(answerId: string) {
    const answerAttachment = this.items.filter(
      (item) => item.answerId.toString() === answerId,
    )

    return answerAttachment
  }

  async createMany(attachments: AnswerAttachment[]): Promise<void> {
    this.items.push(...attachments)
  }

  async deleteMany(attachments: AnswerAttachment[]): Promise<void> {
    const answerAttachments = this.items.filter((item) => {
      return !attachments.some((attachment) => attachment.equals(item))
    })

    this.items = answerAttachments
  }
}
