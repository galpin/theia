// *****************************************************************************
// MIT License
//
// Copyright (c) 2025 Catppuccin Themes Extension
// *****************************************************************************

import { ContainerModule } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { CatppuccinThemesContribution } from './catppuccin-themes-contribution';

export default new ContainerModule(bind => {
    bind(CatppuccinThemesContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(CatppuccinThemesContribution);
});
