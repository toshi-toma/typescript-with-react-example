import * as React from 'react';

interface Props {
  label: string;
  onClick: () => void;
}
const Button: React.SFC<Props> = (props: Props) => (
  <button onClick={props.onClick}>{props.label}</button>
);
export default Button;