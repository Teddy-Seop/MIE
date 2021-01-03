import { registerEnumType } from '@nestjs/graphql';

export enum PurchaseStatusType {
  WaitDeposit = 'wait_deposit',
  DepositCompleted = 'deposit_completed',
  Shipping = 'shipping',
  Confirmation = 'confirmation',
  Canceled = 'canceled',
}
registerEnumType(PurchaseStatusType, { name: 'PurchaseStatusType' });
