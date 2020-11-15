import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html'
})
export class PortofolioComponent {
  src = '../../assets/data/portofolio.pdf';

  textLayerRendered(): void {
    const pdfReport = document.getElementById('pdf-viewer');
    let externalLinks: HTMLCollectionOf<HTMLAnchorElement>;

    if (pdfReport) {
      externalLinks = pdfReport.getElementsByTagName('a');

      for (let i = 0; i < externalLinks.length; i++) {
        externalLinks[i].setAttribute('target', '_blank');
      }
    }
  }
}
