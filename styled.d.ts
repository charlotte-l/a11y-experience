import {} from 'styled-components';
import {} from 'styled-components/cssprop';

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
