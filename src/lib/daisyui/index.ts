  export function closeDaiyUIDrawer(id: string) {
    const hidden_checkbox = document.getElementById(id) as HTMLInputElement;
    hidden_checkbox.checked = false;
  }
