import flosAccordion from './flos-accordion.mdx';

export default {
  title: 'Flos/Accordion',
  argTypes: {
    activeIndex: { type: 'string', control: 'text', description: 'Prop for controlling which panel is expanded.' },
  },
};

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus, sagittis in nisl eget, mattis luctus velit. Suspendisse sed auctor libero, maximus mattis nibh. Pellentesque gravida, est a dignissim convallis, erat tellus hendrerit turpis, vel fermentum massa nibh mattis nulla. Suspendisse in volutpat turpis.';

const AccordionTemplate = ({ ...args }) => {
  return `
  <flos-accordion active-index="${args.activeIndex ? args.activeIndex : ''}">
  <flos-accordion-panel heading="Udvidet elforsikring"
  subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
    <p>${loremIpsum}</p>
  </flos-accordion-panel>
  </flos-accordion>
  `;
};
export const AccordionWithPanel = AccordionTemplate.bind({});

const AccordionActiveIndexTemplate = ({ ...args }) => {
  return `
  <flos-accordion active-index="${args.activeIndex ? args.activeIndex : ''}">
  <flos-accordion-panel heading="Udvidet elforsikring"
  subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
    <p>${loremIpsum}</p>
  </flos-accordion-panel>
	<flos-accordion-panel heading="Udvidet elforsikring"
  subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
    <p>${loremIpsum}</p>
  </flos-accordion-panel>
	<flos-accordion-panel heading="Udvidet elforsikring"
  subtitle="Erstatter din elektronik til nyværdi, indtil tingene er fire år gamle.">
    <p>${loremIpsum}</p>
  </flos-accordion-panel>
  </flos-accordion>
  `;
};
export const AccordionWithActiveIndexTemplate = AccordionActiveIndexTemplate.bind({});
AccordionWithActiveIndexTemplate.args = {
  activeIndex: '1',
};
