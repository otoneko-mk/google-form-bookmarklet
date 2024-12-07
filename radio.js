javascript: (function () {
	function clickFirstRadioInGroups() {
		let actionPerformed = false;
		document
			.querySelectorAll('[role="radiogroup"]:not(.checked)')
			.forEach((group) => {
				const firstRadio = group.querySelector(
					'[role="radio"]:not([aria-checked="true"])'
				);
				if (firstRadio) {
					firstRadio.click();
					group.classList.add("checked");
					actionPerformed = true;
				}
			});
		return actionPerformed;
	}

	function clickButtonByText(buttonText) {
		const button = Array.from(
			document.querySelectorAll('[role="button"]')
		).find((button) => button.innerText.includes(buttonText));
		if (button) {
			button.click();
			return true;
		}
		return false;
	}

	function performActions() {
		if (clickFirstRadioInGroups()) return;
		if (clickButtonByText("次へ")) return;
		if (clickButtonByText("送信")) clearInterval(interval);
	}

	const interval = setInterval(performActions, 500);
})();
