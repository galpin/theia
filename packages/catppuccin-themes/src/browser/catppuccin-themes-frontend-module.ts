// *****************************************************************************
// Copyright (c) 2021 Catppuccin
// Copyright (c) 2025 and others.
//
// Catppuccin theme data is licensed under the MIT License.
// See LICENSE-CATPPUCCIN in this package.
// *****************************************************************************

import { ContainerModule } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { CatppuccinThemesContribution } from './catppuccin-themes-contribution';

export default new ContainerModule(bind => {
    bind(CatppuccinThemesContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(CatppuccinThemesContribution);
});
