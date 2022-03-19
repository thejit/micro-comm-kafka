import { Inject, Injectable } from '@nestjs/common';
import { Producer } from 'kafkajs';

@Injectable()
export class AppService {
  constructor(
    @Inject('KafkaProducer')
    private readonly kafkaProducer: Producer,
  ) {
    //
  }
  getHello(): string {
    return 'Hello World!';
  }
  async sendMessage(topic, data, key?) {
    return this.kafkaProducer.send({
      topic,
      messages: [
        {
          value: JSON.stringify(data),
          key,
        },
      ],
    });
  }
}
