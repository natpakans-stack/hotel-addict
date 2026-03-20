// ==================== Hotel Addict Shared Components ====================
// Injects navbar, mobile-nav, footer, back-to-top, and login-overlay HTML.
// Usage: place <div id="navbar-root" data-active="home" data-transparent></div> etc.
// Load this script BEFORE main.js and auth.js (synchronous, no DOMContentLoaded).

function renderNavbar(options) {
    var transparent = options && options.transparent;
    var active = (options && options.active) || '';
    var navClass = 'navbar' + (transparent ? ' navbar--transparent' : '');
    var homeActive = active === 'home' ? ' navbar__link--active' : '';
    var voucherActive = active === 'voucher' ? ' navbar__link--active' : '';
    var aboutActive = active === 'about' ? ' navbar__link--active' : '';

    return '<nav class="' + navClass + '" aria-label="เมนูหลัก">' +
        '<div class="navbar__inner">' +
            '<a href="index.html" class="navbar__logo">Hotel <span class="gold">Addict</span></a>' +
            '<ul class="navbar__menu">' +
                '<li><a href="index.html" class="navbar__link' + homeActive + '">หน้าแรก</a></li>' +
                '<li><a href="voucher-list.html" class="navbar__link' + voucherActive + '">ค้นหาวอชเชอร์</a></li>' +
                '<li><a href="about.html" class="navbar__link' + aboutActive + '">เกี่ยวกับเรา</a></li>' +
            '</ul>' +
            '<div class="navbar__actions">' +
                '<div class="navbar__account">' +
                    '<button class="navbar__account-btn" onclick="this.parentElement.classList.toggle(\'open\')">' +
                        '<span class="material-symbols-outlined">person_outline</span>' +
                        'เข้าสู่ระบบ/สมัครสมาชิก' +
                        '<span class="material-symbols-outlined navbar__menu-icon">menu</span>' +
                    '</button>' +
                    '<div class="navbar__account-dropdown">' +
                        '<div class="navbar__account-section-label">บัญชีผู้ใช้งาน</div>' +
                        '<a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="navbar__account-cta">เข้าสู่ระบบ/สมัครสมาชิก</a>' +
                        '<ul class="navbar__account-list">' +
                            '<li><a href="my-account.html"><span class="material-symbols-outlined">person_outline</span>บัญชีของฉัน</a></li>' +
                            '<li><a href="my-voucher.html"><span class="material-symbols-outlined">confirmation_number</span>วอชเชอร์ของฉัน</a></li>' +
                            '<li><a href="wishlist.html"><span class="material-symbols-outlined">favorite_border</span>รายการที่ถูกใจ</a></li>' +
                        '</ul>' +
                        '<div class="navbar__account-section-label" style="margin-top:4px;">การตั้งค่า</div>' +
                        '<ul class="navbar__account-list">' +
                            '<li><span><span class="material-symbols-outlined">translate</span>ภาษา<span class="navbar__account-value">\uD83C\uDDF9\uD83C\uDDED ไทย</span></span></li>' +
                            '<li><span><span class="material-symbols-outlined">payments</span>การแสดงราคา<span class="navbar__account-value">THB</span></span></li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<button class="navbar__hamburger" aria-label="เปิดเมนู" onclick="document.querySelector(\'.mobile-nav\').classList.add(\'active\')">' +
                '<span class="material-symbols-outlined" aria-hidden="true">menu</span>' +
            '</button>' +
        '</div>' +
    '</nav>';
}

function renderMobileNav() {
    return '<div class="mobile-nav">' +
        '<div class="mobile-nav__header">' +
            '<button class="mobile-nav__close" aria-label="ปิดเมนู" onclick="document.querySelector(\'.mobile-nav\').classList.remove(\'active\')">' +
                '<span class="material-symbols-outlined" aria-hidden="true">close</span>' +
            '</button>' +
            '<a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="mobile-nav__login-link">เข้าสู่ระบบ/สมัครสมาชิก</a>' +
            '<button class="navbar__hamburger" style="visibility:hidden;" aria-hidden="true">' +
                '<span class="material-symbols-outlined">menu</span>' +
            '</button>' +
        '</div>' +

        '<!-- บัญชีผู้ใช้งาน -->' +
        '<div class="mobile-nav__section-label">บัญชีผู้ใช้งาน</div>' +
        '<div class="mobile-nav__cta-wrap" style="padding:0 var(--space-lg);">' +
            '<a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')" class="mobile-nav__cta">เข้าสู่ระบบ/สมัครสมาชิก</a>' +
        '</div>' +
        '<ul class="mobile-nav__list mobile-nav__account-list">' +
            '<li><a href="my-account.html" class="mobile-nav__link"><span class="material-symbols-outlined">person_outline</span>บัญชีของฉัน</a></li>' +
            '<li><a href="my-voucher.html" class="mobile-nav__link"><span class="material-symbols-outlined">confirmation_number</span>วอชเชอร์ของฉัน</a></li>' +
            '<li><a href="wishlist.html" class="mobile-nav__link"><span class="material-symbols-outlined">favorite_border</span>รายการที่ถูกใจ</a></li>' +
        '</ul>' +

        '<div class="mobile-nav__divider"></div>' +

        '<!-- เมนูหลัก -->' +
        '<div class="mobile-nav__section-label">เมนู</div>' +
        '<ul class="mobile-nav__list">' +
            '<li><a href="index.html" class="mobile-nav__link"><span class="material-symbols-outlined">home</span>หน้าแรก</a></li>' +
            '<li><a href="voucher-list.html" class="mobile-nav__link"><span class="material-symbols-outlined">search</span>ค้นหาวอชเชอร์</a></li>' +
            '<li><a href="about.html" class="mobile-nav__link"><span class="material-symbols-outlined">info</span>เกี่ยวกับเรา</a></li>' +
        '</ul>' +

        '<div class="mobile-nav__divider"></div>' +

        '<!-- การตั้งค่า -->' +
        '<div class="mobile-nav__section-label">การตั้งค่า</div>' +
        '<ul class="mobile-nav__list">' +
            '<li>' +
                '<span class="mobile-nav__link">' +
                    '<span class="material-symbols-outlined">translate</span>' +
                    'ภาษา' +
                    '<span class="mobile-nav__link-value">\uD83C\uDDF9\uD83C\uDDED ไทย</span>' +
                '</span>' +
            '</li>' +
            '<li>' +
                '<span class="mobile-nav__link">' +
                    '<span class="material-symbols-outlined">payments</span>' +
                    'การแสดงราคา' +
                    '<span class="mobile-nav__link-value">THB</span>' +
                '</span>' +
            '</li>' +
        '</ul>' +
    '</div>' +
    '</div>';
}

function renderLoginOverlay() {
    return '<div class="login-overlay" id="loginOverlay">' +
        '<div class="login-overlay__card">' +
            '<button class="login-overlay__close" aria-label="ปิด" onclick="document.getElementById(\'loginOverlay\').classList.remove(\'active\')"><span class="material-symbols-outlined">close</span></button>' +

            '<!-- Banner -->' +
            '<div class="login-overlay__banner">' +
                '<div class="login-overlay__banner-icon"><span class="material-symbols-outlined">lock_open</span></div>' +
                '<div class="login-overlay__banner-title">เข้าสู่ระบบ / ลงทะเบียน</div>' +
                '<div class="login-overlay__banner-sub">เข้าสู่ระบบเพื่อซื้อวอชเชอร์ในราคาพิเศษ</div>' +
            '</div>' +

            '<div class="login-overlay__body">' +
                '<!-- Social Login -->' +
                '<div class="login-overlay__social">' +
                    '<button class="login-overlay__social-btn login-overlay__social-btn--line" onclick="doLogin()">' +
                        '<img src="assets/images/social/line-logo.svg" alt="LINE" style="width:22px;height:22px;border-radius:4px;">' +
                        ' เข้าสู่ระบบด้วย LINE' +
                    '</button>' +
                    '<button class="login-overlay__social-btn login-overlay__social-btn--google">' +
                        '<svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>' +
                        ' เข้าสู่ระบบด้วย Google' +
                    '</button>' +
                    '<button class="login-overlay__social-btn login-overlay__social-btn--facebook">' +
                        '<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#fff"/></svg>' +
                        ' เข้าสู่ระบบด้วย Facebook' +
                    '</button>' +
                    '<button class="login-overlay__social-btn login-overlay__social-btn--apple">' +
                        '<svg viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.14 4.27-3.74 4.25z" fill="#fff"/></svg>' +
                        ' เข้าสู่ระบบด้วย Apple' +
                    '</button>' +
                '</div>' +

                '<div class="login-overlay__divider">หรือ</div>' +

                '<!-- Email/Phone OTP -->' +
                '<label class="login-overlay__form-label">อีเมลหรือเบอร์โทร</label>' +
                '<input type="text" class="login-overlay__input" id="otpInput" placeholder="อีเมล หรือ เบอร์โทรศัพท์" oninput="toggleOtpBtn()">' +
                '<button class="login-overlay__submit" id="otpBtn" disabled>ส่ง OTP</button>' +

                '<!-- PDPA -->' +
                '<label class="login-overlay__pdpa">' +
                    '<input type="checkbox" checked id="pdpaCheck" onchange="toggleOtpBtn()">' +
                    '<span>ยอมรับ <a href="#">นโยบายความเป็นส่วนตัว (PDPA)</a> และ <a href="#">เงื่อนไขการใช้งาน</a></span>' +
                '</label>' +
            '</div>' +
        '</div>' +
    '</div>';
}

function renderFooter() {
    return '<footer class="footer">' +
        '<div class="container">' +
            '<div class="footer__grid">' +
                '<div class="footer__col">' +
                    '<a href="index.html" class="navbar__logo" style="color:var(--footer-text)">Hotel <span class="footer__gold">Addict</span></a>' +
                    '<p class="footer__desc">วอชเชอร์โรงแรมหรู ซื้อก่อน เลือกวันทีหลัง</p>' +
                    '<div class="footer__social">' +
                        '<a href="#" class="footer__social-btn" aria-label="Facebook"><span class="material-symbols-outlined" aria-hidden="true">public</span></a>' +
                        '<a href="#" class="footer__social-btn" aria-label="Instagram"><span class="material-symbols-outlined" aria-hidden="true">photo_camera</span></a>' +
                        '<a href="#" class="footer__social-btn" aria-label="LINE"><span class="material-symbols-outlined" aria-hidden="true">chat</span></a>' +
                    '</div>' +
                '</div>' +
                '<div class="footer__col">' +
                    '<h4 class="footer__heading">บริการลูกค้า</h4>' +
                    '<ul class="footer__list">' +
                        '<li><a href="#">ศูนย์ช่วยเหลือ</a></li>' +
                        '<li><a href="#">วิธีซื้อวอชเชอร์</a></li>' +
                        '<li><a href="#">นโยบายการยกเลิก</a></li>' +
                        '<li><a href="#">ติดต่อเรา</a></li>' +
                    '</ul>' +
                '</div>' +
                '<div class="footer__col">' +
                    '<h4 class="footer__heading">เกี่ยวกับเรา</h4>' +
                    '<ul class="footer__list">' +
                        '<li><a href="about.html">เกี่ยวกับ Hotel Addict</a></li>' +
                        '<li><a href="#">ร่วมงานกับเรา</a></li>' +
                        '<li><a href="#">พาร์ทเนอร์โรงแรม</a></li>' +
                        '<li><a href="#">บล็อก</a></li>' +
                    '</ul>' +
                '</div>' +
                '<div class="footer__col">' +
                    '<h4 class="footer__heading">ค้นพบ</h4>' +
                    '<ul class="footer__list">' +
                        '<li><a href="index.html">วอชเชอร์โรงแรม</a></li>' +
                        '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')">เข้าสู่ระบบ</a></li>' +
                        '<li><a href="#" onclick="event.preventDefault();document.getElementById(\'loginOverlay\').classList.add(\'active\')">สมัครสมาชิก</a></li>' +
                        '<li><a href="voucher-list.html">ค้นหาวอชเชอร์</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
            '<div class="footer__bottom">' +
                '<p>&copy; 2026 Hotel Addict. สงวนลิขสิทธิ์ทุกประการ</p>' +
                '<div class="footer__bottom-links">' +
                    '<a href="#">ข้อกำหนดการใช้งาน</a>' +
                    '<a href="#">นโยบายความเป็นส่วนตัว</a>' +
                    '<a href="#">Cookie Policy</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</footer>';
}

function renderBackToTop() {
    return '<button class="back-to-top" aria-label="กลับด้านบน">' +
        '<span class="material-symbols-outlined">keyboard_arrow_up</span>' +
    '</button>';
}

// ==================== Auto-inject ====================
(function() {
    var el;
    el = document.getElementById('navbar-root');
    if (el) {
        var transparent = el.hasAttribute('data-transparent');
        var active = el.getAttribute('data-active') || '';
        el.outerHTML = renderNavbar({ transparent: transparent, active: active });
    }
    el = document.getElementById('mobile-nav-root');
    if (el) el.outerHTML = renderMobileNav();
    el = document.getElementById('login-overlay-root');
    if (el) el.outerHTML = renderLoginOverlay();
    el = document.getElementById('footer-root');
    if (el) el.outerHTML = renderFooter();
    el = document.getElementById('back-to-top-root');
    if (el) el.outerHTML = renderBackToTop();
})();
