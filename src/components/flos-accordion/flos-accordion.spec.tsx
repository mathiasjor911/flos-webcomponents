import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { FlosAccordion } from './flos-accordion';
import { FlosAccordionPanel } from '../flos-accordion-panel/flos-accordion-panel';

it('Renders correctly w/o subtitle', async () => {
  const page = await newSpecPage({
    components: [FlosAccordion, FlosAccordionPanel],
    template: () => (
      <flos-accordion>
        <flos-accordion-panel heading="Udvidet elforsikring" id='test'>
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
        <flos-accordion-panel id='test' heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
          <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
        </flos-accordion-panel>
      </flos-accordion>
    ),
  });
  expect(page.root).toMatchSnapshot();
});

it('Expands panel when clicked',async () => {
	const panel = new FlosAccordionPanel()
	expect(panel.expanded).toBe(false);
	panel.toggleExpand();
	expect(panel.expanded).toBe(true);
})

it('Closes open panel when another is clicked', async () =>{
	const page = await newSpecPage({
    components: [FlosAccordion, FlosAccordionPanel],
		autoApplyChanges: true,
    template: () => (
      <flos-accordion>
        <flos-accordion-panel expanded={true} heading="Udvidet elforsikring" id='test-1'>
          <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
        </flos-accordion-panel>
        <flos-accordion-panel heading="Udvidet elforsikring" id='test-2'>
          <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
        </flos-accordion-panel>
      </flos-accordion>
    ),
  });
  const panel1 = page.doc.querySelectorAll('flos-accordion-panel')[0];
  const panel2 = page.doc.querySelectorAll('flos-accordion-panel')[1];

	panel2.click()

	expect(panel1.expanded).toBe(false);
	expect(panel2.expanded).toBe(true);
});