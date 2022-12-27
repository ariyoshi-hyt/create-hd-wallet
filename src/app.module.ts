import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BtcModule } from './btc/btc.module';
import { EthModule } from './eth/eth.module';

@Module({
  imports: [BtcModule, EthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
