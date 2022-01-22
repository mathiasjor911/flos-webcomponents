import { Component, Prop, h, State, Element, Watch, Listen } from '@stencil/core';
@Component({
  tag: 'flos-accordion',
  shadow: true,
})
export class Accordion {
  @Element() host: HTMLElement;
  /** Prop for controlling which panel is expanded.*/
  @Prop({ mutable: true, reflect: true }) activeIndex?: string;
  /** Internal state for controlling the current open panel */
  @State() activePanel: string;

  @Watch('activePanel')
  watchActivePanel(newValue: string) {
    this.expandActivePanel(newValue);
  }
  // Runs when component is declared
  connectedCallback() {
    this.allPanels().forEach((panel, index) => {
      panel.panelId = index.toString();
      panel.toggle = () => this.updateState(panel.panelId);
    });
  }
  // Runs before the components first render
  componentWillRender() {
    if (this.activeIndex && this.activeIndex !== this.activePanel) {
      this.activePanel = this.activeIndex;
    }
  }

  // Eventlistener for keyboard events
  @Listen('keydown', { capture: true })
  onKeyDown(e: any) {
    let eventTarget = [e.target];
    let panel = eventTarget[0].parentElement;

    switch (e.key) {
      case 'Enter':
      case ' ':
        this.updateState(panel.panelId);
    }
  }

  private allPanels = () => Array.from(this.host.querySelectorAll('flos-accordion-panel'));

  private updateState(panelId: string) {
    const newActivePanel = this.activePanel === panelId ? '' : panelId;
    this.activePanel = newActivePanel;
    this.activeIndex = this.activePanel;
  }

  private expandActivePanel(activePanel) {
    this.allPanels().forEach(panel => {
      panel.expanded = panel.panelId === activePanel;
    });
  }

  render() {
    return <slot />;
  }
}
