import {ComponentPropsWithRef} from 'react'

// Context imports
import {
  UseInputsContext,
  UseInputsContextProvider,
  UseInputsContextProps
} from './context/useInputsContext/useInputsContextWeb'


// Atoms props
import type { InputWebProps as InputProps } from './components/atoms/Input/InputProps';
import type { ButtonWebProps as ButtonProps } from './components/atoms/Button/Props';
import type { DetailsProps } from './components/atoms/Details/DetailsWeb';
import type { LinkProps } from 'next/link';
import type { LoadingSpinnerProps } from './components/atoms/LoadingSpinner';
import type { SelectProps } from './components/atoms/Select';
import type { TdProps } from './components/atoms/Td';
import type { ThProps } from './components/atoms/Th';
import type { TitleProps } from './components/atoms/Title';
import type { VideoProps } from './components/atoms/Video';

// Molecules props
import type { FormProps } from './components/molecules/Form/FormWeb';
import type { DatalistProps } from './components/molecules/Datalist';
import type { FooterProps } from './components/molecules/Footer';
import type { HeaderProps } from './components/molecules/Header';
import type { SearchBarProps } from './components/molecules/SearchBar';
import type { TableProps } from './components/molecules/Table';

// Pages props
import type { GlobalStylesProps } from './components/pages/GlobalStyles';

declare global {
  type ComponentProps<El extends keyof JSX.IntrinsicElements> = ComponentPropsWithRef<El> & {}
}

// Atoms
export { default as Input}  from "./components/atoms/Input/InputWeb";
export { default as Button } from "./components/atoms/Button/ButtonWeb";
export { default as Link } from "./components/atoms/Link";
export { default as LoadingSpinner } from "./components/atoms/LoadingSpinner";
export { default as Td } from './components/atoms/Td'
export { default as Th } from './components/atoms/Th'
export {default as Details} from './components/atoms/Details/DetailsWeb'
export { default as Title } from './components/atoms/Title'
export { default as Select } from './components/atoms/Select'

// Molecules
export { default as Form } from "./components/molecules/Form/FormWeb";
export { default as Footer } from "./components/molecules/Footer";
export { default as Header } from "./components/molecules/Header";
export { default as SearchBar } from "./components/molecules/SearchBar";
export { default as Table } from './components/molecules/Table'
export { default as Datalist } from './components/molecules/Datalist'

// Pages (design system)
export * from "./components/pages/404Styles";
export { default as GlobalStyles } from "./components/pages/GlobalStyles";

// src/pages
export { default as Page404 } from "./pages/404";
export { default as _app } from "./pages/_app";
export { default as _document } from "./pages/_document";
export { default as index } from "./pages/index";

// Hooks
export { default as useInputs } from "./hooks/useInputs/useInputsWeb";

// context
export {
  UseInputsContext,
  UseInputsContextProvider
}

// Components props
export type {
  // Atoms props
  InputProps,
  ButtonProps,
  DetailsProps,
  LinkProps,
  LoadingSpinnerProps,
  SelectProps,
  TdProps,
  ThProps,
  TitleProps,
  VideoProps,

  // Molecules props
  FormProps,
  DatalistProps,
  FooterProps,
  HeaderProps,
  SearchBarProps,
  TableProps,

  // Pages
  GlobalStylesProps,

  // Context
  UseInputsContextProps
}
