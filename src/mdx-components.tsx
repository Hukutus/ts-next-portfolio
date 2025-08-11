import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

const components: MDXComponents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ''}
      width={props.width || 100}
      height={props.height || 100}
      style={{ height: 'auto' }}
      className="sticker"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
