import {ElementRef, Injectable} from '@angular/core';
import {jsPDF} from "jspdf";
import {PrintAttribute} from "./print.constants";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  printPage(elRef: ElementRef) {
    const doc = new jsPDF({
      unit: 'px',
      format: [595, 842]
    });

    doc.html(elRef.nativeElement, {
      windowWidth: 595,
      width: 595,
      autoPaging: 'text',
      html2canvas: {
        ignoreElements: (element: HTMLElement) => {
          return this.isBlacklistedByAttr(element);
        }
      },
      callback: (doc: jsPDF) => {
        doc.deletePage(doc.getNumberOfPages());
        doc.save('pdf-export');
      }
    });
  }

  private isBlacklistedByAttr(element: HTMLElement) {
    return element.getAttribute(PrintAttribute) === 'false';
  }

  // can also be filtered by class names
  // private isBlacklistedByClass(element: HTMLElement, blackList: string[] = []) {
  //   return blackList.some((skippedClasses) => element.classList.contains(skippedClasses));
  // }
}
