const nextPageButtons = await this.page.$$('button#_btnNext');
const nextPageButtonState = await nextPageButtons[0].isDisabled();
