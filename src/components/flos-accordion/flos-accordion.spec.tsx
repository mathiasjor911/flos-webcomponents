import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';
import { Accordion } from './flos-accordion';
import { AccordionPanel } from '../flos-accordion-panel/flos-accordion-panel';

describe('Accordion with panels', () => {
  it('Renders correctly w/o subtitle', async () => {
    const page = await newSpecPage({
      components: [Accordion, AccordionPanel],
      template: () => (
        <flos-accordion>
          <flos-accordion-panel heading="Udvidet elforsikring" id="test">
            <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
          </flos-accordion-panel>
        </flos-accordion>
      ),
    });
    expect(page.root).toMatchSnapshot();
  });

  it('Renders correctly w/ subtitle', async () => {
    const page = await newSpecPage({
      components: [Accordion, AccordionPanel],
      template: () => (
        <flos-accordion>
          <flos-accordion-panel id="test" heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
            <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
          </flos-accordion-panel>
        </flos-accordion>
      ),
    });
    expect(page.root).toMatchSnapshot();
  });

  it('Expands panel when active index is defined', async () => {
    const page = await newSpecPage({
      components: [Accordion, AccordionPanel],
      template: () => (
        <flos-accordion activeIndex="0">
          <flos-accordion-panel id="test" heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
            <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
          </flos-accordion-panel>
        </flos-accordion>
      ),
    });

    const panel = page.doc.querySelector('flos-accordion-panel');
    expect(panel.expanded).toBe(true);
  });

  it('Expands panel on click', async () => {
    const page = await newSpecPage({
      components: [Accordion, AccordionPanel],
      template: () => (
        <flos-accordion>
          <flos-accordion-panel id="test" heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
            <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
          </flos-accordion-panel>
        </flos-accordion>
      ),
    });

    const panel = page.doc.querySelector('flos-accordion-panel');
    const panelHeading = page.doc.querySelector('.panel-heading') as HTMLElement;

    panelHeading.click();

    await page.waitForChanges()
    expect(panel.expanded).toBe(true);
  });

  it('Closes open panel when a new panel is clicked', async () => {
    const page = await newSpecPage({
      components: [Accordion, AccordionPanel],
      template: () => (
        <flos-accordion activeIndex='0'>
          <flos-accordion-panel id="test2" heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
            <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
          </flos-accordion-panel>
          <flos-accordion-panel id="test1" heading="Udvidet elforsikring" subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
            <p>Den udvidede elektronikforsikring gør individuelle elektronikforsikringer overflødige.</p>
          </flos-accordion-panel>
        </flos-accordion>
      ),
    });

    const panel1 = page.doc.querySelectorAll('flos-accordion-panel')[0];
    const panel2 = page.doc.querySelectorAll('flos-accordion-panel')[1];

    const panel2Heading = page.doc.querySelectorAll('.panel-heading')[1]as HTMLElement;

    panel2Heading.click();

    await page.waitForChanges()
    expect(panel1.expanded).toBe(false);
    expect(panel2.expanded).toBe(true);
  });
});
