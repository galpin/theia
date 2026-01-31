// *****************************************************************************
// Copyright (c) 2021 Catppuccin
// Copyright (c) 2025 and others.
//
// Catppuccin theme data is licensed under the MIT License.
// See LICENSE-CATPPUCCIN in this package.
// *****************************************************************************

import { injectable, inject, postConstruct } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { ThemeService } from '@theia/core/lib/browser/theming';
import { MonacoThemeRegistry } from '@theia/monaco/lib/browser/textmate/monaco-theme-registry';

@injectable()
export class CatppuccinThemesContribution implements FrontendApplicationContribution {

    @inject(ThemeService)
    protected readonly themeService: ThemeService;

    @inject(MonacoThemeRegistry)
    protected readonly monacoThemeRegistry: MonacoThemeRegistry;

    @postConstruct()
    protected init(): void {
        this.registerThemes();
    }

    protected registerThemes(): void {
        // Register Catppuccin Mocha (dark)
        this.monacoThemeRegistry.register(
            require('../../data/themes/mocha.json'),
            undefined,
            'catppuccin-mocha',
            'vs-dark'
        );

        this.themeService.register({
            id: 'catppuccin-mocha',
            type: 'dark',
            label: 'Catppuccin Mocha',
            editorTheme: 'catppuccin-mocha'
        });

        // Register Catppuccin Macchiato (dark)
        this.monacoThemeRegistry.register(
            require('../../data/themes/macchiato.json'),
            undefined,
            'catppuccin-macchiato',
            'vs-dark'
        );

        this.themeService.register({
            id: 'catppuccin-macchiato',
            type: 'dark',
            label: 'Catppuccin Macchiato',
            editorTheme: 'catppuccin-macchiato'
        });

        // Register Catppuccin Frappé (dark)
        this.monacoThemeRegistry.register(
            require('../../data/themes/frappe.json'),
            undefined,
            'catppuccin-frappe',
            'vs-dark'
        );

        this.themeService.register({
            id: 'catppuccin-frappe',
            type: 'dark',
            label: 'Catppuccin Frappé',
            editorTheme: 'catppuccin-frappe'
        });

        // Register Catppuccin Latte (light)
        this.monacoThemeRegistry.register(
            require('../../data/themes/latte.json'),
            undefined,
            'catppuccin-latte',
            'vs'
        );

        this.themeService.register({
            id: 'catppuccin-latte',
            type: 'light',
            label: 'Catppuccin Latte',
            editorTheme: 'catppuccin-latte'
        });
    }
}
