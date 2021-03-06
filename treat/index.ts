// This is provided so consumers can import `sku/treat`,
// since they don't depend on `treat` directly.

// We can't re-export directly because eslint-plugin-import doesn't understand :(

import {
  createTheme,
  style,
  styleMap,
  css,
  globalStyle,
  resolveStyles,
  resolveClassName,
  resolveClassNames,
  ThemeRef,
  ClassRef,
  Styles,
  ThemedStyles,
  StyleSheet,
  StaticStyleSheet,
  ThemedStyleSheet,
  TreatTheme,
  StylesMap,
} from 'treat';

// Provided for backwards compatibility. Remove in sku 9
import {
  TreatProvider,
  useStyles,
  useClassName,
  useClassNames,
} from 'react-treat';

export {
  createTheme,
  style,
  styleMap,
  css,
  TreatProvider,
  useStyles,
  useClassName,
  useClassNames,
  resolveStyles,
  resolveClassName,
  resolveClassNames,
  globalStyle,
};

// We need to re-export types separately or they won't work in webpack :(((
export type ThemeRef = ThemeRef;
export type ClassRef = ClassRef;
export type Styles = Styles;
export type ThemedStyles<Theme> = ThemedStyles<Theme>;
export type StyleSheet<Theme, ClassName extends string> = StyleSheet<
  Theme,
  ClassName
>;
export type StaticStyleSheet<ClassName extends string> = StaticStyleSheet<
  ClassName
>;
export type ThemedStyleSheet<
  Theme,
  ClassName extends string
> = ThemedStyleSheet<Theme, ClassName>;
export type TreatTheme<Tokens> = TreatTheme<Tokens>;
export type StylesMap<ClassName extends string> = StylesMap<ClassName>;
