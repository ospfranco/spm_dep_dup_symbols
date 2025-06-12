import * as React from 'react';

import { PassmodViewProps } from './Passmod.types';

export default function PassmodView(props: PassmodViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
