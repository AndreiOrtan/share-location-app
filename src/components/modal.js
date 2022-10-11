export class Modal {
  constructor(modalContentId) {
    this.modalContent = document.getElementById(modalContentId);
    this.modalTemplate = document.getElementById("modal-template");
  }
  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplate.content,
        true
      );
      this.modalElement = modalElements.querySelector(".modal");
      this.modalBackdrop = modalElements.querySelector(".backdrop");

      const modalContent = document.importNode(this.modalContent.content, true);
      this.modalElement.appendChild(modalContent);

      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.modalBackdrop);
    } else {
      alert("Browser support not good enough.");
    }
  }
  hide() {
    document.body.removeChild(this.modalElement);
    document.body.removeChild(this.modalBackdrop);
  }
}
