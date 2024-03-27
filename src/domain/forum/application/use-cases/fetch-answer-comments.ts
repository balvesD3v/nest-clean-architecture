import { Either, right } from '@/core/either'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswersCommentRepository } from '../repositories/answers-comments-repository'
import { Injectable } from '@nestjs/common'

interface FetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

type FetchAnswerCommentsUseCaseResponse = Either<
  null,
  {
    answerComments: AnswerComment[]
  }
>
@Injectable()
export class FecthAnswersCommentsUseCase {
  constructor(
    private readonly answersCommentRepository: AnswersCommentRepository,
  ) {}

  async execute({
    page,
    answerId,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments = await this.answersCommentRepository.findByAnswerId(
      answerId,
      {
        page,
      },
    )

    return right({
      answerComments,
    })
  }
}
