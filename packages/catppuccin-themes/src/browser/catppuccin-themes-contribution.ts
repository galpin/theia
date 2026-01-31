// *****************************************************************************
// Copyright (C) 2025 and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
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
