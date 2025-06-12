import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Passmod.types';

type PassmodModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class PassmodModule extends NativeModule<PassmodModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(PassmodModule, 'PassmodModule');
