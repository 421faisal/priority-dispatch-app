"use client"
import { useEffect } from "react"

// This component intercepts clicks on anchor links to sections (e.g., /#services)
// and handles the smooth scroll manually, preventing the hash from polluting the URL.
export function SmoothScroll() {
    useEffect(() => {
        const handleNavClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            // If the clicked element is an anchor, has a hash, and points to the current page
            if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
                const id = anchor.hash.replace('#', '');
                const elem = document.getElementById(id);

                if (elem) {
                    e.preventDefault(); // Prevents the URL from updating with the #hash
                    elem.scrollIntoView({ behavior: 'smooth' });

                    // Optionally clear any existing hash from the URL without reloading
                    if (window.location.hash) {
                        window.history.replaceState(null, '', window.location.pathname);
                    }
                }
            }
        };

        document.addEventListener('click', handleNavClick);
        return () => document.removeEventListener('click', handleNavClick);
    }, []);

    return null;
}
