"use client";
import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>[ "push" ]>[ 1 ]
    >;
  }
}

export function Providers( { children, themeProps }: ProvidersProps ) {
  const router = useRouter();
  const pathname = usePathname();
  const [ queryClient ] = React.useState( () => new QueryClient() );

  React.useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [ pathname ] );

  return (
    <QueryClientProvider client={ queryClient }>
      <NextUIProvider navigate={ router.push }>
        <NextThemesProvider { ...themeProps }>
          <ClerkProvider publishableKey="pk_test_bGlnaHQtZ2hvdWwtOC5jbGVyay5hY2NvdW50cy5kZXYk">{ children }</ClerkProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
