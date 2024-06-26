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
import type { LoadingSpinnerProps } from './components/atoms/LoadingSpinner/LoadingSpinner';
import type { SelectProps } from './components/atoms/Select/Select';
import type { TdProps } from './components/atoms/Td';
import type { ThProps } from './components/atoms/Th';
import type { TitleProps } from './components/atoms/Title/Title';
import type { VideoProps } from './components/atoms/Video';

// Molecules props
import type { FormProps } from './components/molecules/Form/FormWeb';
import type { DatalistProps } from './components/molecules/DataList/Datalist';
import type { FooterProps } from './components/molecules/Footer';
import type { HeaderProps } from './components/molecules/Header';
import type { SearchBarProps } from './components/molecules/SearchBar';
import type { TableProps } from './components/molecules/Table';
import type { DetailCardProps } from './components/molecules/DetailCard/DetailCard';

// Pages props
import type { GlobalStylesProps } from './components/pages/GlobalStyles';

// Hooks props
import type {UseInputsReturn, InputBlurEvent, InputChangeEvent} from './hooks/useInputs/useInputsWeb'

declare global {
  type ComponentProps<El extends keyof JSX.IntrinsicElements> = ComponentPropsWithRef<El> & {}
}

// Atoms
export { default as Input}  from "./components/atoms/Input/InputWeb";
export { default as Button } from "./components/atoms/Button/ButtonWeb";
export { default as Link } from "./components/atoms/Link/Link";
export { default as LoadingSpinner } from "./components/atoms/LoadingSpinner/LoadingSpinner";
export { default as Td } from './components/atoms/Td'
export { default as Th } from './components/atoms/Th'
export {default as Details} from './components/atoms/Details/DetailsWeb'
export { default as Title } from './components/atoms/Title/Title'
export { default as Select } from './components/atoms/Select/Select'
export {default as TrashCan } from './components/atoms/TrashCan/TrashCan'
export {default as AcceptanceCriteria } from './components/atoms/AcceptanceCriteria/AcceptanceCriteriaWeb'

// Molecules
export { default as Form } from "./components/molecules/Form/FormWeb";
export { default as Footer } from "./components/molecules/Footer";
export { default as Header } from "./components/molecules/Header";
export { default as SearchBar } from "./components/molecules/SearchBar";
export { default as Table } from './components/molecules/Table'
export { default as Datalist } from './components/molecules/DataList/Datalist'
export { default as DetailCard } from './components/molecules/DetailCard'

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

// Utils
export {default as capitalize } from './utils/capitalize'
export * from './utils/constants'

/**
 * Theming
 * 
 */

import theme from './components/theme'
export {theme}


// Props
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
  DetailCardProps,

  // Pages
  GlobalStylesProps,

  // Hooks
  UseInputsReturn,
  InputBlurEvent,
  InputChangeEvent,

  // Context
  UseInputsContextProps
}
