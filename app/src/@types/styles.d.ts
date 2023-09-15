//! FILE.D.TS significa que dentro do arquivo só terá código de DEFINIÇÃO DE TIPOS DO TYPESCRIPT
//* esse arquivo nunca poderá ter código javascript, somente definição de tipagem

// Aula 1 - Estrutura da aplicação - Tipagem de temas

import "styled-components";
import { defaultTheme } from "../styles/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
