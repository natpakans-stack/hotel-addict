// ==================== Hotel Addict Mock Auth ====================

function isLoggedIn() {
    return localStorage.getItem('hotelAddict_loggedIn') === 'true';
}

function doLogin() {
    localStorage.setItem('hotelAddict_loggedIn', 'true');
    document.getElementById('loginOverlay')?.classList.remove('active');
    updateNavbarState();
}

function doLogout() {
    localStorage.removeItem('hotelAddict_loggedIn');
    updateNavbarState();
}

function updateNavbarState() {
    var loggedIn = isLoggedIn();
    var btn = document.querySelector('.navbar__account-btn');
    var dropdown = document.querySelector('.navbar__account-dropdown');
    var mobileLoginLink = document.querySelector('.mobile-nav__login-link');
    var mobileCtaWrap = document.querySelector('.mobile-nav__cta-wrap');
    var mobileAccountList = document.querySelector('.mobile-nav__account-list');

    if (!btn) return;

    if (loggedIn) {
        // Desktop button
        btn.innerHTML = '<span class="navbar__avatar">ณ</span><span class="material-symbols-outlined navbar__menu-icon">menu</span>';

        // Desktop dropdown
        if (dropdown) {
            dropdown.innerHTML =
                '<div class="navbar__account-profile">' +
                    '<span class="navbar__avatar navbar__avatar--lg">ณ</span>' +
                    '<div>' +
                        '<div class="navbar__account-profile-name">ณัฐพัชร์ สิริรัตน์</div>' +
                        '<div class="navbar__account-profile-email">natpakansirirat@gmail.com</div>' +
                    '</div>' +
                '</div>' +
                '<div class="navbar__account-section-label">บัญชีผู้ใช้งาน</div>' +
                '<ul class="navbar__account-list">' +
                    '<li><a href="#"><span class="material-symbols-outlined">person_outline</span>บัญชีของฉัน</a></li>' +
                    '<li><a href="my-voucher.html"><span class="material-symbols-outlined">confirmation_number</span>วอชเชอร์ของฉัน</a></li>' +
                    '<li><a href="wishlist.html"><span class="material-symbols-outlined">favorite_border</span>รายการที่ถูกใจ</a></li>' +
                '</ul>' +
                '<div class="navbar__account-section-label" style="margin-top:4px;">การตั้งค่า</div>' +
                '<ul class="navbar__account-list">' +
                    '<li><span><span class="material-symbols-outlined">translate</span>ภาษา<span class="navbar__account-value">🇹🇭 ไทย</span></span></li>' +
                    '<li><span><span class="material-symbols-outlined">payments</span>การแสดงราคา<span class="navbar__account-value">THB</span></span></li>' +
                '</ul>' +
                '<div class="navbar__account-divider"></div>' +
                '<ul class="navbar__account-list">' +
                    '<li><a href="#" onclick="event.preventDefault();doLogout();" class="navbar__account-logout"><span class="material-symbols-outlined">logout</span>ออกจากระบบ</a></li>' +
                '</ul>';
        }

        // Mobile nav
        if (mobileLoginLink) {
            mobileLoginLink.textContent = 'ณัฐพัชร์ สิริรัตน์';
            mobileLoginLink.style.pointerEvents = 'none';
            mobileLoginLink.removeAttribute('onclick');
        }
        if (mobileCtaWrap) {
            mobileCtaWrap.innerHTML =
                '<div style="display:flex;align-items:center;gap:12px;">' +
                    '<span class="navbar__avatar navbar__avatar--lg">ณ</span>' +
                    '<div>' +
                        '<div style="font-weight:700;font-size:16px;color:var(--text-primary);">ณัฐพัชร์ สิริรัตน์</div>' +
                        '<div style="font-size:13px;color:var(--text-muted);">natpakansirirat@gmail.com</div>' +
                    '</div>' +
                '</div>';
        }
        if (mobileAccountList) {
            mobileAccountList.innerHTML =
                '<li><a href="#" class="mobile-nav__link"><span class="material-symbols-outlined">person_outline</span>บัญชีของฉัน</a></li>' +
                '<li><a href="my-voucher.html" class="mobile-nav__link"><span class="material-symbols-outlined">confirmation_number</span>วอชเชอร์ของฉัน</a></li>' +
                '<li><a href="wishlist.html" class="mobile-nav__link"><span class="material-symbols-outlined">favorite_border</span>รายการที่ถูกใจ</a></li>';
        }
        // Add mobile logout if not exists
        if (!document.querySelector('.mobile-nav__logout')) {
            var settingsList = document.querySelectorAll('.mobile-nav__list');
            if (settingsList.length > 0) {
                var last = settingsList[settingsList.length - 1];
                last.insertAdjacentHTML('afterend',
                    '<div class="mobile-nav__divider mobile-nav__logout"></div>' +
                    '<ul class="mobile-nav__list mobile-nav__logout">' +
                        '<li><a href="#" onclick="event.preventDefault();doLogout();" class="mobile-nav__link" style="color:var(--color-error);"><span class="material-symbols-outlined" style="color:var(--color-error);">logout</span>ออกจากระบบ</a></li>' +
                    '</ul>'
                );
            }
        }
    } else {
        // Desktop button
        btn.innerHTML = '<span class="material-symbols-outlined">person_outline</span>เข้าสู่ระบบ/สมัครสมาชิก<span class="material-symbols-outlined navbar__menu-icon">menu</span>';

        // Desktop dropdown
        if (dropdown) {
            dropdown.innerHTML =
                '<div class="navbar__account-section-label">บัญชีผู้ใช้งาน</div>' +
                '<a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="navbar__account-cta">เข้าสู่ระบบ/สมัครสมาชิก</a>' +
                '<ul class="navbar__account-list">' +
                    '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')"><span class="material-symbols-outlined">person_outline</span>บัญชีของฉัน</a></li>' +
                    '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')"><span class="material-symbols-outlined">confirmation_number</span>วอชเชอร์ของฉัน</a></li>' +
                    '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')"><span class="material-symbols-outlined">favorite_border</span>รายการที่ถูกใจ</a></li>' +
                '</ul>' +
                '<div class="navbar__account-section-label" style="margin-top:4px;">การตั้งค่า</div>' +
                '<ul class="navbar__account-list">' +
                    '<li><span><span class="material-symbols-outlined">translate</span>ภาษา<span class="navbar__account-value">🇹🇭 ไทย</span></span></li>' +
                    '<li><span><span class="material-symbols-outlined">payments</span>การแสดงราคา<span class="navbar__account-value">THB</span></span></li>' +
                '</ul>';
        }

        // Mobile nav restore
        if (mobileLoginLink) {
            mobileLoginLink.textContent = 'เข้าสู่ระบบ/สมัครสมาชิก';
            mobileLoginLink.style.pointerEvents = '';
            mobileLoginLink.setAttribute('onclick', "event.preventDefault();document.getElementById('loginOverlay').classList.add('active')");
        }
        if (mobileCtaWrap) {
            mobileCtaWrap.innerHTML = '<a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="mobile-nav__cta">เข้าสู่ระบบ/สมัครสมาชิก</a>';
        }
        if (mobileAccountList) {
            mobileAccountList.innerHTML =
                '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="mobile-nav__link"><span class="material-symbols-outlined">person_outline</span>บัญชีของฉัน</a></li>' +
                '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="mobile-nav__link"><span class="material-symbols-outlined">confirmation_number</span>วอชเชอร์ของฉัน</a></li>' +
                '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="mobile-nav__link"><span class="material-symbols-outlined">favorite_border</span>รายการที่ถูกใจ</a></li>';
        }
        // Remove logout from mobile
        document.querySelectorAll('.mobile-nav__logout').forEach(function(el) { el.remove(); });
    }
}

document.addEventListener('DOMContentLoaded', updateNavbarState);
