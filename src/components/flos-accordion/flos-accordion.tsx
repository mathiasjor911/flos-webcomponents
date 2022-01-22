import { Component, h, State, Element, Listen } from '@stencil/core';
@Component({
  tag: 'flos-accordion',
	shadow:true
})
export class FlosAccordion {
  // Giver os adgang til Host elementet
  @Element() host: HTMLElement;
  // State der skal holde styr på det aktive panel
  @State() activePanel: string = '';


  // Giver alle paneler et id vi kan lytte efter
  connectedCallback() {
    Array.from(this._allPanels()).forEach(p => {
      p.setAttribute('id', 'panel-' + this.getId());
    });
  }

  // Lytter efter event emittet fra Accordion Panel
  @Listen('expand')
  onExpandHandler(event: CustomEvent<string>) {
    // Sætter det aktive panel til det ID der kom med eventet
    // fra Accordion Panel komponenten.
    this.activePanel = event.detail;
		this._togglePanel();
  }

  // Lytter efter keydown events
  @Listen('keydown', { capture: true })
  handleKeyDown(e: any) {
    let eventTarget = [e.target];
    let panel = eventTarget[0].parentElement;

    switch (e.key) {
      case 'Enter':
      case ' ':
				this.activePanel = panel.id
				this._togglePanel()
    }
  }

	private _togglePanel(){
		let panels = this._allPanels();
    panels.forEach(panel => {
      if (panel.id == this.activePanel) {
        if (panel.expanded) {
          this.activePanel = '';
          panel.setAttribute('expanded', 'false');
          return;
        }
        panel.setAttribute('expanded', 'true');
        return;
      } else {
        panel.setAttribute('expanded', 'false');
      }
    })
	}

  private getId() {
    let id = Math.floor(Math.random() * 10000);
    return id;
  }

  // Får alle vores paneler i et array
  private _allPanels = () => Array.from(this.host.querySelectorAll('flos-accordion-panel'));

  render() {
    return <slot></slot>;
  }
}
