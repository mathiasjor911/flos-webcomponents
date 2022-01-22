import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'flos-accordion-panel',
  styleUrl: 'flos-accordion-panel.css',
})
/** Accordion Panel should only be used as a child of Accordion */
export class AccordionPanel {
  /**  Sets the title of the Accordion Panel */
  @Prop() heading: string;
  /** Sets the subtitle of the Accordion Panel */
  @Prop() subtitle?: string;
  /** Boolean that controls wheter or not the panel is open */
  @Prop({mutable:true, reflect: true}) expanded: boolean;
  /** Uniqe ID for each accordion panel */
  @Prop({ reflect: true }) panelId: string;
  /** Prop passed by the Accordion wrapper to control panel toggle */
  @Prop() toggle: () => void;

  render() {
    return (
      <Host>
        <div
          class="panel-heading"
          role="button"
          id={`panel-heading-${this.panelId}`}
          onClick={() => {
            this.toggle()
          }}
          aria-expanded={this.expanded ? 'true' : 'false'}
          aria-controls={`panel-${this.panelId}`}
          tabIndex={0}
        >
          <span>
            <h4>{this.heading}</h4>
            {this.subtitle && <p>{this.subtitle}</p>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#131947"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div id={`panel-${this.panelId}`} class={'panel-body'} aria-labelledby={`panel-heading-${this.panelId}`}>
          <slot />
        </div>
      </Host>
    );
  }
}
