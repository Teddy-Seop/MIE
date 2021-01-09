import { Injectable } from '@nestjs/common';
import { CustomerEntity } from '@/modules/database/entities/customer.entity';
import { CustomerRepository } from '@/modules/database/repositories';

@Injectable()
export class CustomerAdapterService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  public async getCustomer(customerId: number): Promise<CustomerEntity> {
    const customer: CustomerEntity = await this.customerRepository.findOneOrFail(
      customerId,
    );
    return customer;
  }
}
