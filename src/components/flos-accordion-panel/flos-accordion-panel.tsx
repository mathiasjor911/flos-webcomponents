import { Component, Prop, h, Fragment, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'flos-accordion-panel',
  styleUrl: 'flos-accordion-panel.css',
})
export class FlosAccordionPanel {
	// Giver os adgang til Host elementet
	@Element() host: HTMLElement;
  /**
   * Title til accordion panel
   */
  @Prop() heading: string;
  /**
   * Plads til uddybende tekst
   */
  @Prop() subtitle?: string;
  /**
   * Prop der bestemmer om panelet er åbent eller ej
   */
  @Prop() expanded?: boolean = false;

	@Event({bubbles: true, composed: true}) expand: EventEmitter<string>;

	handleExpand(id: string){
		this.expand.emit(id);
	}

  render() {
    return (
      <Fragment>
        <div
          class="accordion-heading"
          aria-expanded={this.expanded ? 'true' : 'false'}
          role="button"
          tabIndex={0}
					onClick={() => this.handleExpand(this.host.id) }
        >
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
        </div>
        <div class="accordion-panel">
          <slot></slot>
        </div>
      </Fragment>
    );
  }
}
