import { BadRequestException, Controller, Get, Param } from '@nestjs/common'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { QuestionsPresenter } from '../presenters/question-presenter'

@Controller('/questions/:slug')
export class GetQuestionsBySlugController {
  constructor(private readonly getQuestionsBySlug: GetQuestionBySlugUseCase) {}

  @Get()
  async handle(@Param('slug') slug: string) {
    const result = await this.getQuestionsBySlug.execute({ slug })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    return {
      question: QuestionsPresenter.toHTTP(result.value.question),
    }
  }
}