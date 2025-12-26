/**
 * Table of Contents - Scroll Spy with Auto-Hide
 * 
 * Features:
 * - Highlights the current section as the user scrolls
 * - Auto-hides after 5 seconds of inactivity
 * - Shows on scroll or mouse movement
 * - Smooth scrolling when clicking TOC links
 */

(function() {
  'use strict';

  const tocSidebar = document.getElementById('toc-sidebar');
  if (!tocSidebar) return;

  const tocNav = tocSidebar.querySelector('#TableOfContents');
  if (!tocNav) return;

  const tocLinks = tocNav.querySelectorAll('a');
  if (!tocLinks.length) return;

  // Get all heading elements that are linked from the TOC
  const headingIds = Array.from(tocLinks).map(link => {
    const href = link.getAttribute('href');
    return href ? href.slice(1) : null; // Remove the # from href
  }).filter(Boolean);

  const headings = headingIds.map(id => document.getElementById(id)).filter(Boolean);

  if (!headings.length) return;

  // Configuration
  const OFFSET = 120; // Offset from top of viewport to consider a heading "active"
  const SCROLL_MARGIN = 80; // Margin when clicking to scroll
  const HIDE_DELAY = 5000; // 5 seconds before hiding

  // Auto-hide state
  let hideTimeout = null;
  let isHidden = false;

  /**
   * Show the TOC sidebar
   */
  function showToc() {
    if (isHidden) {
      tocSidebar.classList.remove('toc-hidden');
      isHidden = false;
    }
    resetHideTimer();
  }

  /**
   * Hide the TOC sidebar
   */
  function hideToc() {
    if (!isHidden) {
      tocSidebar.classList.add('toc-hidden');
      isHidden = true;
    }
  }

  /**
   * Reset the hide timer
   */
  function resetHideTimer() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(hideToc, HIDE_DELAY);
  }

  /**
   * Update the active state of TOC items based on scroll position
   */
  function updateActiveItem() {
    const scrollPosition = window.scrollY + OFFSET;
    let activeIndex = -1;

    // Find which heading is currently in view
    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading && heading.offsetTop <= scrollPosition) {
        activeIndex = i;
        break;
      }
    }

    // If no heading is in view yet, default to first one if near top
    if (activeIndex === -1 && headings[0] && window.scrollY < headings[0].offsetTop) {
      activeIndex = 0;
    }

    // Update active states
    tocLinks.forEach((link, index) => {
      const tocItem = link.closest('li');
      if (tocItem) {
        if (index === activeIndex) {
          tocItem.classList.add('active');
        } else {
          tocItem.classList.remove('active');
        }
      }
    });

    // Update reading progress
    updateReadingProgress();
  }

  /**
   * Update the reading progress indicator
   */
  function updateReadingProgress() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const scrollProgress = (window.scrollY / docHeight) * 100;
      tocSidebar.style.setProperty('--reading-progress', `${Math.min(scrollProgress, 100)}%`);
    }
  }

  /**
   * Smooth scroll to heading when clicking TOC link
   */
  function handleTocClick(event) {
    const link = event.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    event.preventDefault();
    
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - SCROLL_MARGIN;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without triggering scroll
      history.pushState(null, null, href);
    }
  }

  /**
   * Handle scroll events - show TOC and update active item
   */
  function handleScroll() {
    showToc();
    updateActiveItem();
  }

  /**
   * Handle mouse movement - show TOC
   */
  function handleMouseMove() {
    showToc();
  }

  /**
   * Handle mouse entering TOC - keep it visible
   */
  function handleTocMouseEnter() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    showToc();
  }

  /**
   * Handle mouse leaving TOC - start hide timer
   */
  function handleTocMouseLeave() {
    resetHideTimer();
  }

  /**
   * Throttle function for scroll/mousemove performance
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Event listeners
  window.addEventListener('scroll', throttle(handleScroll, 50), { passive: true });
  document.addEventListener('mousemove', throttle(handleMouseMove, 500), { passive: true });
  document.addEventListener('keydown', showToc, { passive: true });
  document.addEventListener('touchstart', showToc, { passive: true });
  
  // TOC-specific events to prevent hiding when interacting with TOC
  tocSidebar.addEventListener('mouseenter', handleTocMouseEnter);
  tocSidebar.addEventListener('mouseleave', handleTocMouseLeave);
  tocNav.addEventListener('click', handleTocClick);

  // Initial setup
  updateActiveItem();
  resetHideTimer(); // Start the initial hide timer

  // Handle hash in URL on page load
  if (window.location.hash) {
    setTimeout(() => {
      const targetId = window.location.hash.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - SCROLL_MARGIN;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
})();
