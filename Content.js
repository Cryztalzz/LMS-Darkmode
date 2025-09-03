function enableDarkMode() {
    document.body.style.backgroundColor = '#1e1e1e';
    document.body.style.color = '#e0e0e0';

    const elements = document.getElementsByTagName('*');
    for (let element of elements) {
        element.style.color = '#e0e0e0';
    }

    const containers = document.querySelectorAll('.container, .card, .panel, .well, .block, .content-wrapper');
    containers.forEach(container => {
        container.style.backgroundColor = '#1e1e1e';
        container.style.border = '1px solid #333333';
    });

    const headers = document.querySelectorAll('header, nav, .navbar, .card-header, .page-header');
    headers.forEach(header => {
        header.style.backgroundColor = '#1e1e1e';
        header.style.borderColor = '#333333';
    });

    const links = document.getElementsByTagName('a');
    for (let link of links) {
        link.style.color = '#4da6ff';
        link.addEventListener('click', function() {
            this.style.color = '#4da6ff';
        });
        if (link.classList.contains('active') || link.getAttribute('aria-current') === 'true') {
            link.style.color = '#4da6ff';
        }
    }

    const visitedLinks = document.querySelectorAll('a:visited');
    visitedLinks.forEach(link => {
        link.style.color = '#4da6ff';
    });

    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.backgroundColor = '#2d2d2d';
        input.style.color = '#e0e0e0';
        input.style.borderColor = '#404040';
    });

    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.style.backgroundColor = '#333333';
        button.style.color = '#e0e0e0';
        button.style.borderColor = '#404040';
    });

    const progressBars = document.querySelectorAll('.progress, .progress-bar, .bar, .bg-white, .progress-wrapper, .progress-container, .completion-progress, .progress-bar-container, .progress-track, .progress-line, .progress-indicator, .completion-indicator, .progress-separator');
    progressBars.forEach(progress => {
        progress.style.backgroundColor = '#333333';
        progress.classList.remove('bg-white');
        progress.classList.add('bg-dark');
        progress.style.border = '1px solid #404040';
    });

    const progressFills = document.querySelectorAll('.progress-bar-fill, .progress-fill, .progress-completed, .progress-bar .bar, .progress .bar, .bar .bar');
    progressFills.forEach(fill => {
        fill.style.backgroundColor = '#4da6ff';
        fill.style.borderColor = '#4da6ff';
    });

    const separators = document.querySelectorAll('hr, .divider, .separator, .border, .border-top, .border-bottom, .border-left, .border-right');
    separators.forEach(separator => {
        separator.style.borderColor = '#333333';
        separator.style.backgroundColor = '#333333';
    });

    const bgWhiteElements = document.querySelectorAll('.bg-white, .bg-light, .bg-default, .bg-standard');
    bgWhiteElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
        element.style.color = '#e0e0e0';
    });

    const completionElements = document.querySelectorAll('.completion-progress, .completion-indicator, .completion-status, .progress-completion, .completion-bar, .completion-track');
    completionElements.forEach(element => {
        element.style.backgroundColor = '#333333';
        element.style.borderColor = '#404040';
    });

    const defaultTextElements = document.querySelectorAll('.text-default, .text-muted, .text-secondary');
    defaultTextElements.forEach(element => {
        element.style.color = '#e0e0e0';
    });

    const defaultBgElements = document.querySelectorAll('.bg-default, .bg-standard, .bg-normal');
    defaultBgElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
    });

    const tables = document.querySelectorAll('table, th, td');
    tables.forEach(table => {
        table.style.backgroundColor = '#1e1e1e';
        table.style.borderColor = '#333333';
        table.style.color = '#e0e0e0';
    });

    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        dropdown.style.backgroundColor = '#1e1e1e';
        dropdown.style.borderColor = '#333333';
    });

    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(item => {
        item.style.backgroundColor = '#1e1e1e';
        item.style.borderColor = '#333333';
    });

    const footers = document.querySelectorAll('footer, #page-footer');
    footers.forEach(footer => {
        footer.style.backgroundColor = '#1e1e1e';
        footer.style.color = '#e0e0e0';
    });

    const popups = document.querySelectorAll('.popover-region-container, .popover, .popover-body, .popover-region-header-container, .content-item-container, .modal-content, .modal-header, .modal-body, .modal-footer');
    popups.forEach(popup => {
        popup.style.backgroundColor = '#000000';
        popup.style.borderColor = '#333333';
        popup.style.color = '#ffffff';
    });

    const notificationItems = document.querySelectorAll('.notification-message, .message, .notification, .notification-message-content');
    notificationItems.forEach(item => {
        item.style.backgroundColor = '#000000';
        item.style.color = '#ffffff';
        item.style.borderColor = '#333333';
    });

    const popupHeaders = document.querySelectorAll('.popover-header, .popover-region-header-text, .popover-region-header-container');
    popupHeaders.forEach(header => {
        header.style.backgroundColor = '#000000';
        header.style.color = '#ffffff';
        header.style.borderColor = '#333333';
    });

    const notificationLinks = document.querySelectorAll('.notification a, .popover-region-container a');
    notificationLinks.forEach(link => {
        link.style.color = '#ffffff';
    });

    const notificationMeta = document.querySelectorAll('.notification-message-meta, .timestamp');
    notificationMeta.forEach(meta => {
        meta.style.color = '#999999';
    });

    const messageDrawer = document.querySelectorAll('.message-drawer, .message-app, .view-conversation, .view-overview');
    messageDrawer.forEach(drawer => {
        drawer.style.backgroundColor = '#000000';
        drawer.style.color = '#ffffff';
        drawer.style.borderColor = '#333333';
    });

    const messageItems = document.querySelectorAll('.message, .message-content, .message-body, .message-text, .message-header');
    messageItems.forEach(item => {
        item.style.backgroundColor = '#000000';
        item.style.color = '#ffffff';
        item.style.borderColor = '#333333';
    });

    const messageInputs = document.querySelectorAll('.message-drawer textarea, .message-drawer input');
    messageInputs.forEach(input => {
        input.style.backgroundColor = '#1a1a1a';
        input.style.color = '#ffffff';
        input.style.borderColor = '#333333';
    });

    const messageHeaders = document.querySelectorAll('.message-drawer .header-container, .message-drawer .footer-container');
    messageHeaders.forEach(header => {
        header.style.backgroundColor = '#000000';
        header.style.color = '#ffffff';
        header.style.borderColor = '#333333';
    });

    const messageList = document.querySelectorAll('.message-drawer .list-group-item, .conversation-list-item');
    messageList.forEach(item => {
        item.style.backgroundColor = '#000000';
        item.style.color = '#ffffff';
        item.style.borderColor = '#333333';
    });

    const messageInfo = document.querySelectorAll('.message-drawer .time, .message-drawer .meta, .message-drawer .last-message');
    messageInfo.forEach(info => {
        info.style.color = '#999999';
    });

    const popoverFooter = document.querySelectorAll('.popover-region-footer-container, .view-overview, .popover-region-footer-container a');
    popoverFooter.forEach(footer => {
        footer.style.backgroundColor = '#000000';
        footer.style.color = '#ffffff';
        footer.style.borderColor = '#333333';
    });

    const seeAllLinks = document.querySelectorAll('.popover-region-footer-container a, .gotocal a');
    seeAllLinks.forEach(link => {
        link.style.backgroundColor = '#000000';
        link.style.color = '#ffffff';
        link.style.textDecoration = 'none';
    });

    const pageNavbar = document.querySelectorAll('.navbar, .navbar-light, .fixed-top, .navbar-expand, .moodle-has-zindex');
    pageNavbar.forEach(nav => {
        nav.style.backgroundColor = '#0a0f1a';
        nav.style.color = '#ffffff';
        nav.style.borderColor = '#1a2333';
    });

    const breadcrumbContainer = document.querySelectorAll('.breadcrumb, .breadcrumb-item');
    breadcrumbContainer.forEach(bread => {
        bread.style.backgroundColor = '#0a0f1a';
        bread.style.color = '#ffffff';
    });

    const sectionContent = document.querySelectorAll('.course-content, .section, .section-header, .section-title, .course-section');
    sectionContent.forEach(section => {
        section.style.backgroundColor = '#1e1e1e';
        section.style.color = '#ffffff';
        section.style.borderColor = '#333333';
    });

    const breadcrumbLinks = document.querySelectorAll('.breadcrumb-item a, .breadcrumb-item.active, .breadcrumb');
    breadcrumbLinks.forEach(link => {
        link.style.backgroundColor = 'transparent';
        link.style.color = '#ffffff';
    });

    const navItems = document.querySelectorAll('.nav-item, .nav-link, .dropdown-item');
    navItems.forEach(item => {
        item.style.backgroundColor = '#0a0f1a';
        item.style.color = '#ffffff';
    });

    const courseTopics = document.querySelectorAll('.text, .topics, .sectionname, .accesshide, [data-key="mycourses"], .has-arrow, .metismenu li a span, .topics h2, .topics h3, .section .content .sectionname');
    courseTopics.forEach(topic => {
        topic.style.color = '#ffffff';
        if (topic.classList.contains('has-arrow')) {
            const span = topic.querySelector('span');
            if (span) {
                span.style.color = '#ffffff';
            }
        }
    });

    const menuItems = document.querySelectorAll('.metismenu .has-arrow, .metismenu span.text');
    menuItems.forEach(item => {
        item.style.color = '#ffffff';
        const spans = item.querySelectorAll('span');
        spans.forEach(span => {
            span.style.color = '#ffffff';
        });
    });

    const mainContent = document.querySelectorAll('.main-content, .content-area, article');
    mainContent.forEach(content => {
        content.style.backgroundColor = '#1e1e1e';
        content.style.color = '#e0e0e0';
    });

    const myCoursesList = document.querySelectorAll('.metismenu, .metismenu ul, .metismenu li, .metismenu .list-group-item, .metismenu .collapse');
    myCoursesList.forEach(item => {
        item.style.backgroundColor = '#1e1e1e';
        item.style.color = '#e0e0e0';
        item.style.borderColor = '#2d2d2d';
    });

    const topicSections = document.querySelectorAll('.topics .section, .section.main, .course-content .section');
    topicSections.forEach(section => {
        section.style.backgroundColor = '#1e1e1e';
        section.style.color = '#e0e0e0';
        section.style.borderColor = '#2d2d2d';
        section.style.borderWidth = '1px';
        section.style.borderStyle = 'solid';
    });

    const courseBoxes = document.querySelectorAll('.metismenu .list-group-item, .topics .section');
    courseBoxes.forEach(box => {
        box.style.backgroundColor = '#1e1e1e';
        box.style.color = '#e0e0e0';
        box.style.borderColor = '#2d2d2d';
    });

    const courseLinks = document.querySelectorAll('.metismenu .list-group-item a, .topics .section a');
    courseLinks.forEach(link => {
        link.style.color = '#e0e0e0';
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#2d2d2d';
        });
        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#1e1e1e';
        });
    });

    const sectionHeaders = document.querySelectorAll('.sectionname, .section .content');
    sectionHeaders.forEach(header => {
        header.style.backgroundColor = '#1e1e1e';
        header.style.color = '#e0e0e0';
    });

    const sidebar = document.querySelectorAll('.sidebar, aside');
    sidebar.forEach(side => {
        side.style.backgroundColor = '#1e1e1e';
        side.style.color = '#e0e0e0';
        side.style.borderColor = '#333333';
    });

    const customElements = document.querySelectorAll('.custom-element, .widget, .module');
    customElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
        element.style.color = '#e0e0e0';
        element.style.borderColor = '#333333';
    });

    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';

    const elements = document.getElementsByTagName('*');
    for (let element of elements) {
        element.style.color = '';
        element.style.backgroundColor = '';
        element.style.borderColor = '';
    }

    localStorage.setItem('darkMode', 'disabled');
}

function restoreDarkModeState() {
    const savedState = localStorage.getItem('darkMode');
    if (savedState === 'enabled') {
        isDarkMode = true;
        enableDarkMode();
        toggleButton.innerHTML = '☀️';
        toggleButton.style.backgroundColor = '#333333';
        toggleButton.style.border = '2px solid #ffffff';
        toggleButton.style.boxShadow = '0 0 5px rgba(255,255,255,0.2)';
    }
}

function handlePageNavigation() {
    if (isDarkMode) {
        enableDarkMode();
    }
}

let isDarkMode = false;

const toggleButton = document.createElement('button');
toggleButton.innerHTML = '🌙';
toggleButton.style.padding = '8px';
toggleButton.style.marginLeft = '10px';
toggleButton.style.marginRight = '10px';
toggleButton.style.borderRadius = '50%';
toggleButton.style.cursor = 'pointer';
toggleButton.style.width = '35px';
toggleButton.style.height = '35px';
toggleButton.style.display = 'flex';
toggleButton.style.alignItems = 'center';
toggleButton.style.justifyContent = 'center';
toggleButton.style.transition = 'all 0.3s ease';
toggleButton.style.backgroundColor = '#ffffff';
toggleButton.style.border = '2px solid #333333';
toggleButton.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';

toggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        disableDarkMode();
        toggleButton.innerHTML = '🌙';
        toggleButton.style.backgroundColor = '#ffffff';
        toggleButton.style.border = '2px solid #333333';
        toggleButton.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';
    } else {
        enableDarkMode();
        toggleButton.innerHTML = '☀️';
        toggleButton.style.backgroundColor = '#333333';
        toggleButton.style.border = '2px solid #ffffff';
        toggleButton.style.boxShadow = '0 0 5px rgba(255,255,255,0.2)';
    }
    isDarkMode = !isDarkMode;
});

toggleButton.addEventListener('mouseover', () => {
    if (isDarkMode) {
        toggleButton.style.backgroundColor = '#444444';
        toggleButton.style.border = '2px solid #ffffff';
    } else {
        toggleButton.style.backgroundColor = '#f0f0f0';
        toggleButton.style.border = '2px solid #000000';
    }
});

toggleButton.addEventListener('mouseout', () => {
    if (isDarkMode) {
        toggleButton.style.backgroundColor = '#333333';
        toggleButton.style.border = '2px solid #ffffff';
    } else {
        toggleButton.style.backgroundColor = '#ffffff';
        toggleButton.style.border = '2px solid #333333';
    }
});

const navbar = document.querySelector('.navbar');
if (navbar) {
    let navbarRight = navbar.querySelector('.navbar-nav.ml-auto');
    if (!navbarRight) {
        navbarRight = document.createElement('div');
        navbarRight.className = 'navbar-nav ml-auto';
        navbar.appendChild(navbarRight);
    }
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.alignItems = 'center';
    
    buttonContainer.appendChild(toggleButton);
    navbarRight.appendChild(buttonContainer);
} else {
    document.body.appendChild(toggleButton);
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
}

const observer = new MutationObserver(() => {
    if (isDarkMode) {
        enableDarkMode();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

window.addEventListener('popstate', handlePageNavigation);
window.addEventListener('pushstate', handlePageNavigation);
window.addEventListener('replacestate', handlePageNavigation);

let currentUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== currentUrl) {
        currentUrl = url;
        handlePageNavigation();
    }
}).observe(document, {subtree: true, childList: true});

window.addEventListener('beforeunload', () => {
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

document.addEventListener('visibilitychange', () => {
    if (!document.hidden && isDarkMode) {
        enableDarkMode();
    }
});

window.addEventListener('focus', () => {
    if (isDarkMode) {
        enableDarkMode();
    }
});

restoreDarkModeState();

document.addEventListener('DOMContentLoaded', () => {
    restoreDarkModeState();
});

window.addEventListener('load', () => {
    restoreDarkModeState();
});

setTimeout(() => {
    restoreDarkModeState();
}, 1);

function ensureDarkModeProgress() {
    if (!isDarkMode) return;
    
    const allProgressSelectors = [
        '.progress', '.progress-bar', '.bar', '.bg-white',
        '.progress-wrapper', '.progress-container', '.completion-progress',
        '.progress-bar-container', '.progress-track', '.progress-line',
        '.progress-indicator', '.completion-indicator', '.progress-separator',
        '.progress-bar-wrapper', '.progress-box', '.progress-section',
        '.progress-area', '.progress-block', '.progress-item',
        '.progress-element', '.progress-component', '.progress-display',
        '.progress-show', '.progress-view', '.progress-panel',
        '.progress-card', '.progress-widget', '.progress-module',
        '.progress-unit', '.progress-part', '.progress-portion',
        '.progress-segment', '.progress-division', '.progress-fraction',
        '.progress-ratio', '.progress-percentage'
    ];
    
    const allProgressElements = document.querySelectorAll(allProgressSelectors.join(', '));
    allProgressElements.forEach(element => {
        element.style.backgroundColor = '#333333';
        element.style.borderColor = '#404040';
    });
    
    const keywordElements = document.querySelectorAll('[class*="progress"], [class*="completion"], [class*="bar"]');
    keywordElements.forEach(element => {
        element.style.backgroundColor = '#333333';
        element.style.borderColor = '#404040';
    });
    
    const whiteStyleElements = document.querySelectorAll('[style*="background-color: white"], [style*="background-color: #fff"], [style*="background-color: #ffffff"], [style*="background: white"], [style*="background: #fff"], [style*="background: #ffffff"]');
    whiteStyleElements.forEach(element => {
        element.style.backgroundColor = '#333333';
    });
    
    const whiteClassElements = document.querySelectorAll('[class*="white"], [class*="light"], [class*="default"]');
    whiteClassElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
        element.style.color = '#e0e0e0';
    });
    
    const specificBgWhiteElements = document.querySelectorAll('.card-footer.bg-white, .dashboard-card-footer.bg-white, .progress.bg-white, .progress-bar.bg-white, .bar.bg-white, .container.bg-white, .card.bg-white, .panel.bg-white, .well.bg-white, .block.bg-white, .content-wrapper.bg-white, .main-content.bg-white, .content-area.bg-white, article.bg-white');
    specificBgWhiteElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
        element.style.color = '#e0e0e0';
    });
    
    const progressBgWhiteElements = document.querySelectorAll('.progress.bg-white, .progress-bar.bg-white, .bar.bg-white');
    progressBgWhiteElements.forEach(element => {
        element.style.backgroundColor = '#333333';
        element.style.borderColor = '#404040';
    });
    
    const dashboardCardFooterElements = document.querySelectorAll('.dashboard-card-footer.bg-white, .card-footer.bg-white, .card-footer.dashboard-card-footer.bg-white');
    dashboardCardFooterElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
        element.style.color = '#e0e0e0';
    });
    
    const allBgWhiteElements = document.querySelectorAll('.bg-white, .bg-light, .bg-default, .bg-standard');
    allBgWhiteElements.forEach(element => {
        element.style.backgroundColor = '#1e1e1e';
        element.style.color = '#e0e0e0';
    });
}

setInterval(ensureDarkModeProgress, 1000);

setTimeout(ensureDarkModeProgress, 2000);
setTimeout(ensureDarkModeProgress, 5000);