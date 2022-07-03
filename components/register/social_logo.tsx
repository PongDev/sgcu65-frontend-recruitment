function SocialLogo() {
  return (
    <div className="icon-container">
      <a href="https://instagram.com/sgcu.chula/">
        <picture>
          <source srcSet="/assets/ig-logo.svg" type="svg" />
          <img src="/assets/ig-logo.svg" alt="ig logo" />
        </picture>
      </a>
      <a href="https://facebook.com/sgcu.chula">
        <picture>
          <source srcSet="/assets/fb-logo.svg" type="svg" />
          <img src="/assets/fb-logo.svg" alt="fb logo" />
        </picture>
      </a>
      <a href="https://twitter.com/sgcu_chula">
        <picture>
          <source srcSet="/assets/twitter-logo.svg" type="svg" />
          <img src="/assets/twitter-logo.svg" alt="twitter logo" />
        </picture>
      </a>
    </div>
  );
}

export default SocialLogo;
