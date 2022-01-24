export default {
  title: 'Flos/Accordion',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    expanded: { type: 'boolean',control: 'boolean', description: 'Boolean that controls wheter or not the panel is open' },
    heading: { type: 'string', control: 'text', description: 'Sets the title of the Accordion Panel' },
    subtitle: { type: 'string', control: 'text', description: 'Sets the subtitle of the Accordion Panel'},
    panelId: {type: 'string', description: 'Uniqe ID for each accordion panel, passed by the Accordion Wrapper '},
    toggle: {type: '() => void', description: 'Prop passed by the Accordion wrapper to control panel toggle'}
  },
};

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum risus, sagittis in nisl eget, mattis luctus velit. Suspendisse sed auctor libero, maximus mattis nibh. Pellentesque gravida, est a dignissim convallis, erat tellus hendrerit turpis, vel fermentum massa nibh mattis nulla. Suspendisse in volutpat turpis.';

const PanelTemplate = ({...args}) => {
  return `
  <flos-accordion-panel heading="${args.heading}" ${args.expanded ? 'expanded' : ''} subtitle="${args.subtitle}">
    <p>${loremIpsum}</p>
  </flos-accordion-panel>`;
};

export const AccordionPanel = PanelTemplate.bind({})
AccordionPanel.args = {
  heading: 'Hello World',
  subtitle: 'How are you doing',
  expanded: false,
}






