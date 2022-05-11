import _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { Device as DeviceModel, PrismaClient } from '@prisma/client';
import { Device } from './models';

@Injectable()
export class DeviceService {
    constructor(private prisma: PrismaClient) {}

    private devices = new Map<string, Device>();

    async loadDevices(): Promise<void> {
        const records: DeviceModel[] = await this.prisma.device.findMany();
        this.devices.clear();
        records.forEach(record => this.devices.set(record.id, Device.fromDatabase(record)));
    }

    addDevice(id: string): Device {
        if (this.devices.has(id)) return this.devices.get(id);

        const device = this.devices.set(id, new Device(id)).get(id);
        this.prisma.device.upsert({
            where: {id},
            create: {id, ...device.exportChanges()},
            update: device.exportChanges()
        });

        return device;
    }

    getDevice(id: string): Device {
        return this.devices.get(id) || null;
    }

    hasDevice(id: string): boolean {
        return this.devices.has(id);
    }

    async updateDevice(id: string, props: {}): Promise<Device> {
        for (const key in props) {
            if (!Device.hasOwnProperty(key)) delete props[key];
        }

        const record: DeviceModel = await this.prisma.device.upsert({
            where: {id},
            create: {id, ...props},
            update: props
        });

        return this.devices.set(id, Device.fromDatabase(record)).get(id);
    }

    deleteDevice(id: string): boolean {
        this.prisma.device.delete({
            where: {id}
        });

        return this.devices.delete(id);
    }

    isDeviceOnline(id: string): boolean {
        return this.devices.has(id) && this.devices.get(id).status == 'online';
    }
}
