/* ============================================
   Hotel Addict — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* === NAVBAR SCROLL BEHAVIOR === */
    /* ทำงานเฉพาะหน้าที่เริ่มด้วย navbar--transparent (มี hero เต็มจอ) */
    const navbar = document.querySelector('.navbar.navbar--transparent');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                navbar.classList.remove('navbar--transparent');
                navbar.classList.add('navbar--solid');
            } else {
                navbar.classList.remove('navbar--solid');
                navbar.classList.add('navbar--transparent');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    /* === ACCOUNT DROPDOWN — toggle on click, close on click outside === */
    const accountWrap = document.querySelector('.navbar__account');
    if (accountWrap) {
        document.addEventListener('click', (e) => {
            if (!accountWrap.contains(e.target)) {
                accountWrap.classList.remove('open');
            }
        });
    }

    /* === LOGIN OVERLAY — close on click outside card === */
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginOverlay) {
        loginOverlay.addEventListener('click', (e) => {
            if (e.target === loginOverlay) {
                loginOverlay.classList.remove('active');
            }
        });
    }

    /* === BACK TO TOP === */
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 300);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* === SKELETON LOADING — section-level, mock 1.5s delay === */
    document.querySelectorAll('.skeleton-wrapper').forEach(wrapper => {
        setTimeout(() => {
            wrapper.classList.add('loaded');
        }, 1500);
    });

    /* === RECENTLY VIEWED (localStorage) === */
    const RECENTLY_VIEWED_KEY = 'hotel_addict_recently_viewed';
    const MAX_RECENT = 5;

    window.HotelAddict = {
        addRecentlyViewed(voucher) {
            const items = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
            const filtered = items.filter(item => item.id !== voucher.id);
            filtered.unshift(voucher);
            localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(filtered.slice(0, MAX_RECENT)));
        },

        getRecentlyViewed() {
            return JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
        },

        removeRecentlyViewed(id) {
            const items = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
            const filtered = items.filter(item => item.id !== id);
            localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(filtered));
        }
    };

});
