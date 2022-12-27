import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ethers } from 'ethers';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic;
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic.phrase);
    const xprv = hdNode.extendedKey;
    return `
      ニーモニックフレーズ：${mnemonic.phrase}
      拡張秘密鍵：${xprv}
      パス：${mnemonic.path}
    `;
  }
}
