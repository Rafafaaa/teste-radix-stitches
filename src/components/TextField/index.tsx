import * as Label from '@radix-ui/react-label';
import { LabelStyles } from './styles'

export function LabelDemo() {
  return (
    <LabelStyles>
      <Label.Root className="LabelRoot" htmlFor="firstName">
        First name
      </Label.Root>
      <input className="Input" type="text" id="firstName" defaultValue="Pedro Duarte" />
      <Label.Root className="LabelRoot" htmlFor="teste">
        Second name
      </Label.Root>
      <input className="Input" type="text" id="teste" defaultValue="Pedro Duarte" />
    </LabelStyles>
  );
};