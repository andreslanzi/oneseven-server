import { Controller, Post, Body } from '@nestjs/common';
import { CreatePaymentIntentDto } from 'src/dtos/createPaymentIntentDto';
import { PaymentSheetService } from 'src/services/paymentSheet.service';

@Controller('payment-sheet')
export class PaymentSheetController {
  constructor(private readonly paymentSheetService: PaymentSheetService) {}
  @Post()
  async postPaymentSheet(
    @Body() createPaymentIntentDto: CreatePaymentIntentDto,
  ) {
    return this.paymentSheetService.postPaymentSheet(createPaymentIntentDto);
  }
}
