import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopographyComponent } from './utilities/topography/topography.component';
import { TextAlignmentDisplayComponent } from './utilities/text-alignment-display/text-alignment-display.component';
import { FloatsPositionComponent } from './utilities/floats-position/floats-position.component';
import { ColorsBackgroundComponent } from './utilities/colors-background/colors-background.component';
import { SpacingComponent } from './utilities/spacing/spacing.component';
import { SizingComponent } from './utilities/sizing/sizing.component';
import { BreakpointsComponent } from './utilities/breakpoints/breakpoints.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { CssStylesComponent } from './css-styles/css-styles.component';
import { ButtonsComponent } from './css-styles/buttons/buttons.component';
import { NavComponent } from './css-styles/nav/nav.component';
import { ListGroupBadgesComponent } from './css-styles/list-group-badges/list-group-badges.component';
import { FormsComponent } from './css-styles/forms/forms.component';
import { InputGroupsComponent } from './css-styles/input-groups/input-groups.component';
import { AlertProgressComponent } from './css-styles/alert-progress/alert-progress.component';
import { TablesPaginationComponent } from './css-styles/tables-pagination/tables-pagination.component';
import { CardsComponent } from './css-styles/cards/cards.component';
import { MediaObjectComponent } from './css-styles/media-object/media-object.component';
import { JumbotronComponent } from './css-styles/jumbotron/jumbotron.component';
import { GridComponent } from './grid/grid.component';
import { JsComponent } from './js/js.component';
import { SystemComponent } from './grid/system/system.component';
import { AlignmentComponent } from './grid/alignment/alignment.component';
import { FlexComponent } from './grid/flex/flex.component';
import { AutoComponent } from './grid/auto/auto.component';
import { CarouselComponent } from './js/carousel/carousel.component';
import { CollapseComponent } from './js/collapse/collapse.component';
import { TooltipComponent } from './js/tooltip/tooltip.component';
import { PopoverComponent } from './js/popover/popover.component';
import { ModalComponent } from './js/modal/modal.component';
import { ScrollspyComponent } from './js/scrollspy/scrollspy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopographyComponent,
    TextAlignmentDisplayComponent,
    FloatsPositionComponent,
    ColorsBackgroundComponent,
    SpacingComponent,
    SizingComponent,
    BreakpointsComponent,
    UtilitiesComponent,
    CssStylesComponent,
    ButtonsComponent,
    NavComponent,
    ListGroupBadgesComponent,
    FormsComponent,
    InputGroupsComponent,
    AlertProgressComponent,
    TablesPaginationComponent,
    CardsComponent,
    MediaObjectComponent,
    JumbotronComponent,
    GridComponent,
    JsComponent,
    SystemComponent,
    AlignmentComponent,
    FlexComponent,
    AutoComponent,
    CarouselComponent,
    CollapseComponent,
    TooltipComponent,
    PopoverComponent,
    ModalComponent,
    ScrollspyComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
