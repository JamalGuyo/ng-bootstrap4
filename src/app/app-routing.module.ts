import { JumbotronComponent } from './css-styles/jumbotron/jumbotron.component';
import { MediaObjectComponent } from './css-styles/media-object/media-object.component';
import { CardsComponent } from './css-styles/cards/cards.component';
import { AlertProgressComponent } from './css-styles/alert-progress/alert-progress.component';
import { InputGroupsComponent } from './css-styles/input-groups/input-groups.component';
import { FormsComponent } from './css-styles/forms/forms.component';
import { ListGroupBadgesComponent } from './css-styles/list-group-badges/list-group-badges.component';
import { NavComponent } from './css-styles/nav/nav.component';
import { ButtonsComponent } from './css-styles/buttons/buttons.component';
import { SizingComponent } from './utilities/sizing/sizing.component';
import { BreakpointsComponent } from './utilities/breakpoints/breakpoints.component';
import { SpacingComponent } from './utilities/spacing/spacing.component';
import { ColorsBackgroundComponent } from './utilities/colors-background/colors-background.component';
import { FloatsPositionComponent } from './utilities/floats-position/floats-position.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopographyComponent } from './utilities/topography/topography.component';
import { TextAlignmentDisplayComponent } from './utilities/text-alignment-display/text-alignment-display.component';
import { TablesPaginationComponent } from './css-styles/tables-pagination/tables-pagination.component';
import { SystemComponent } from './grid/system/system.component';
import { AlignmentComponent } from './grid/alignment/alignment.component';
import { FlexComponent } from './grid/flex/flex.component';
import { AutoComponent } from './grid/auto/auto.component';
import { TooltipComponent } from './js/tooltip/tooltip.component';
import { ScrollspyComponent } from './js/scrollspy/scrollspy.component';
import { PopoverComponent } from './js/popover/popover.component';
import { ModalComponent } from './js/modal/modal.component';
import { CollapseComponent } from './js/collapse/collapse.component';
import { CarouselComponent } from './js/carousel/carousel.component';

const routes: Routes = [
  // UTILITIES IN BO0TSTRAP 4 ROUTES
  {
    path: 'utilities',
    component: TopographyComponent
  },
  {
    path: 'utilities/alignment',
    component: TextAlignmentDisplayComponent
  },
  {
    path: 'utilities/floats',
    component: FloatsPositionComponent
  },
  {
    path: 'utilities/colors',
    component: ColorsBackgroundComponent
  },
  {
    path: 'utilities/spacing',
    component: SpacingComponent
  },
  {
    path: 'utilities/sizing',
    component: SizingComponent
  },
  {
    path: 'utilities/breakpoints',
    component: BreakpointsComponent
  },
  //CSS IN BOOTSTRAP 4 ROUTES
  {
    path: 'css/buttons',
    component: ButtonsComponent
  },
  {
    path: 'css/navbar',
    component: NavComponent
  },
  {
    path: 'css/list',
    component: ListGroupBadgesComponent
  },
  {
    path: 'css/forms',
    component: FormsComponent
  },
  {
    path: 'css/input',
    component: InputGroupsComponent
  },
  {
    path: 'css/alert',
    component: AlertProgressComponent
  },
  {
    path: 'css/tables',
    component: TablesPaginationComponent
  },
  {
    path: 'css/cards',
    component: CardsComponent
  },
  {
    path: 'css/media',
    component: MediaObjectComponent
  },
  {
    path: 'css/jumbotron',
    component: JumbotronComponent
  },
  //GRID AND FLEXBOX ROUTES
  {
    path: 'grid/grid-system',
    component: SystemComponent
  },
  {
    path: 'grid/grid-alignment',
    component: AlignmentComponent
  },
  {
    path: 'grid/flex',
    component: FlexComponent
  },
  {
    path: 'grid/auto-margin',
    component: AutoComponent
  },
  //JAVASCRIPT BOOTSTRAP 4 ROUTES
  {
    path: 'js/carousel',
    component: CarouselComponent
  },
  {
    path: 'js/collapse',
    component: CollapseComponent
  },
  {
    path: 'js/modal',
    component: ModalComponent
  },
  {
    path: 'js/popover',
    component: PopoverComponent
  },
  {
    path: 'js/scrollspy',
    component: ScrollspyComponent
  },
  {
    path: 'js/tooltip',
    component: TooltipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
