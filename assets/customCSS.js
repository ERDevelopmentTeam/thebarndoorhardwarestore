document.addEventListener('DOMContentLoaded', e => {
  const addCustomCSSForShopFollowButton = (button) => {
  const customStyle = document.createElement("style");
    customStyle.innerHTML = `
        .follow-text {
            background-color: #485047 !important;border-radius: 48px;
        }
    `; 
    button.shadowRoot.querySelector("shop-follow-button")
      .shadowRoot.querySelector("follow-on-shop-button")
      .shadowRoot.querySelector("style")
      .after(customStyle);
  };

  const button = document.querySelector('shop-login-button');
  const config = { childList: true };

  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      constole.log(mutation.type);
      if (mutation.type === "childList") {
        addCustomCSSForShopFollowButton(button);
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(button, config);

  addCustomCSSForShopFollowButton(button);
});

