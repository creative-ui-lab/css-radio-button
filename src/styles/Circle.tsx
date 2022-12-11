import LightenDarkenColor from "pjs/LightenDarkenColor";
import { css, styled } from "twin.macro";

const color1 = '#ffffff';
const color2 = '#3197EE';

const Focus = css`
  outline: none;
  border-color: ${color2};
`

const Checked = css`
  background-color: ${color2};
  box-shadow: inset 0 0 0 4px ${color1};
`

const Disabled = css`
  box-shadow: inset 0 0 0 4px ${color1};
  border-color: ${LightenDarkenColor(color1, -25)};
  background: ${LightenDarkenColor(color1, -25)};
`

const RadioCircle = styled.div<{ focus?: boolean; checked?: boolean; disabled?: boolean; }>`
  background-color: ${color1};
  border-radius: 100%;
  border: 1px solid ${LightenDarkenColor(color1, -25)};
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  position: relative;
  cursor: pointer;
  text-align: center;
  transition: all 250ms ease;

  ${({ focus }) => focus ? Focus : null};
  ${({ checked }) => checked ? Checked : null};
  ${({ disabled }) => disabled ? Disabled : null};
`

export default RadioCircle;