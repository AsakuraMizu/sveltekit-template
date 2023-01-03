declare namespace svelteHTML {
  type TwoStringsCompositionPrefix = 'm' | 'p';
  type TwoStringsCompositionSuffix = 'r' | 'b' | 'l' | 't' | 'x' | 'y' | 'a';
  /** Some words can compose with two strings to become a complete unocss rule such as ha, mr, mb */
  type TwoStringsComposition = `${TwoStringsCompositionPrefix}${TwoStringsCompositionSuffix}`;
  /** Some words can be a complete unocss rule by itself */
  type SpecialSingleWord =
    | 'container'
    | 'flex'
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'table'
    | 'isolate'
    | 'absolute'
    | 'relative'
    | 'fixed'
    | 'sticky'
    | 'static'
    | 'visible'
    | 'invisible'
    | 'grow'
    | 'shrink'
    | 'antialiased'
    | 'italic'
    | 'ordinal'
    | 'overline'
    | 'underline'
    | 'uppercase'
    | 'lowercase'
    | 'capitalize'
    | 'truncate'
    | 'border'
    | 'rounded'
    | 'outline'
    | 'ring'
    | 'shadow'
    | 'blur'
    | 'grayscale'
    | 'invert'
    | 'sepia'
    | 'transition'
    | 'resize'
    | 'transform'
    | 'filter'
    | 'ha'
    | 'wa';
  type HWNumberCompositionPrefix = 'max-h' | 'max-w' | 'min-h' | 'min-w' | 'w' | 'h';
  type StringNumberCompositionPrefix =
    | 'op'
    | 'opacity'
    | 'fw'
    | 'p'
    | 'm'
    | 'z'
    | HWNumberCompositionPrefix
    | TwoStringsComposition;
  /** Some words can be a complete unocss rule by compose a string and a number, such as op80, fw300, p2, p10px */
  type StringNumberComposition =
    | `${StringNumberCompositionPrefix}${number}${'px' | 'rem' | 'em' | ''}`
    | `${StringNumberCompositionPrefix}${'a' | 'auto' | 'full'}`
    | `${HWNumberCompositionPrefix}screen`;
  type PseudoPrefix =
    | 'active'
    | 'before'
    | 'after'
    | 'dark'
    | 'light'
    | 'first'
    | 'last'
    | 'focus'
    | 'hover'
    | 'link'
    | 'root'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'enabled'
    | 'disabled'
    | 'all'
    | 'children';
  /** Some words can be used to separate utilities, such as font="mono light", text="sm white" */
  type SeparateEnabled =
    | 'align'
    | 'animate'
    | 'backdrop'
    | 'bg'
    | 'blend'
    | 'border'
    | 'box'
    | 'container'
    | 'content'
    | 'cursor'
    | 'display'
    | 'divide'
    | 'filter'
    | 'flex'
    | 'font'
    | 'gap'
    | 'gradient'
    | 'grid'
    | 'h'
    | 'icon'
    | 'items'
    | 'justify'
    | 'list'
    | 'm'
    | 'max-h'
    | 'max-w'
    | 'min-h'
    | 'min-w'
    | 'object'
    | 'opacity'
    | 'order'
    | 'outline'
    | 'overflow'
    | 'p'
    | 'place'
    | 'pos'
    | 'ring'
    | 'select'
    | 'shadow'
    | 'space'
    | 'table'
    | 'text'
    | 'transform'
    | 'transition'
    | 'underline'
    | 'w'
    | 'z'
    | PseudoPrefix;
  type BasicAttributes =
    | StringNumberComposition
    | SpecialSingleWord
    | TwoStringsComposition
    | SeparateEnabled;
  type AttributifyNames<Prefix extends string = ''> = `${Prefix}${BasicAttributes}`;
  // | `${Prefix}${PseudoPrefix}:${BasicAttributes}`;
  type AttributifyAttributes = Partial<Record<AttributifyNames, string | boolean>>;
  // eslint-disable-next-line
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
