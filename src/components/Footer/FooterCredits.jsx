import React from "react";

export const FooterCredits = () => {
  return (
    <div className="flex py-6 text-center" data-testid="footer-credit">
      <p>
        &copy; 2024{" "}
        <a
          href="https://github.com/KvJellyBean"
          target="_blank"
          rel="noopener noreferrer"
        >
          KvJellyBean
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
};
