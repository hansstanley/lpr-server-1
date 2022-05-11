import { Injectable } from '@nestjs/common';
import { Device } from 'src/device/models';
import { Gate } from 'src/gate/models';

@Injectable()
export class LprService {
    processPlateRecognition(device: Device) {
        const gate = device.gate;
        const project = gate.project;
    }
}
