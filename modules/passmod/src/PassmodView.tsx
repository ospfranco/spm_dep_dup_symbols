import { requireNativeView } from 'expo';
import * as React from 'react';

import { PassmodViewProps } from './Passmod.types';

const NativeView: React.ComponentType<PassmodViewProps> =
  requireNativeView('Passmod');

export default function PassmodView(props: PassmodViewProps) {
  return <NativeView {...props} />;
}
