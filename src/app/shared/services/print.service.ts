import {ElementRef, Injectable} from '@angular/core';
import {jsPDF} from "jspdf";
import {PrintAttribute} from "./print.constants";
import html2canvas from "html2canvas";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  printPage(elRef: ElementRef) {
    html2canvas(elRef.nativeElement, {
      useCORS: true,
      imageTimeout: 500,
      ignoreElements: (element: Element) => this.isBlacklistedByAttr(element)
    }).then(canvas => {
      const doc = new jsPDF({
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      doc.addImage(canvas, 'px', 0, 0, canvas.width, canvas.height).save('pdf-export');
    });
  }

  private isBlacklistedByAttr(element: Element) {
    return element.getAttribute(PrintAttribute) === 'false';
  }

  // can also be filtered by class names
  // private isBlacklistedByClass(element: HTMLElement, blackList: string[] = []) {
  //   return blackList.some((skippedClasses) => element.classList.contains(skippedClasses));
  // }
}
