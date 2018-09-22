declare global {
  namespace JSX {
    interface Element {
      tag: string
      props: ElementProps & Props
      children: any[]
    }
    interface IntrinsicElements {
      [tag: string]: ElementProps & Props
    }
  }
}

export interface Props {
  [prop: string]: any
}

export interface ElementProps {
  html?: string
}

export interface ComponentProps {
  children?: any[]
}

export interface Component<P = Props> {
  (props: ComponentProps & P): JSX.Element
}
