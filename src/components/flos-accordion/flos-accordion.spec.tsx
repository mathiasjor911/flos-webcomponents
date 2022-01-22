import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { FlosAccordion } from './flos-accordion';
import { FlosAccordionPanel } from '../flos-accordion-panel/flos-accordion-panel';

it('Renders correctly w/o subtitle', async () => {
  const page = await newSpecPage({
    components: [FlosAccordion, FlosAccordionPanel],
    template: () => (
      <flos-accordion>
        <flos-accordion-panel heading="Udvidet elforsikring">
          <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
        </flos-accordion-panel>
      </flos-accordion>
    ),
  });
  expect(page.root).toMatchSnapshot();
});

it('Renders correctly w/ subtitle', async () => {
  const page = await newSpecPage({
    components: [FlosAccordion, FlosAccordionPanel],
    template: () => (
      <flos-accordion>
        <flos-accordion-panel heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
          <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
        </flos-accordion-panel>
      </flos-accordion>
    ),
  });
  expect(page.root).toMatchSnapshot();
});
