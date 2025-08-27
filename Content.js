function enableDarkMode() {
    document.body.style.backgroundColor = '#121212';
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

    const progressBars = document.querySelectorAll('.progress, .progress-bar, .bar, .bg-white');
    progressBars.forEach(progress => {
        progress.style.backgroundColor = '#333333';
        progress.classList.remove('bg-white');
        progress.classList.add('bg-dark');
        progress.style.border = '1px solid #404040';
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
}

let isDarkMode = false;

const toggleButton = document.createElement('div');
toggleButton.className = 'toggle-switch';
toggleButton.innerHTML = `
    <input type="checkbox" id="darkModeToggle">
    <label for="darkModeToggle">
        <span class="toggle-track">
            <span class="toggle-icon">🌙</span>
        </span>
    </label>
`;

// Tambahkan style untuk toggle switch
const style = document.createElement('style');
style.textContent = `
    .toggle-switch {
        position: relative;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-track {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 50px;
        height: 24px;
        background-color: #ffffff;
        border: 2px solid #333333;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0 2px;
    }

    .toggle-icon {
        font-size: 14px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background-color: #333333;
        border-radius: 50%;
        color: #ffffff;
    }

    input:checked + label .toggle-track {
        background-color: #333333;
        border-color: #ffffff;
    }

    input:checked + label .toggle-icon {
        transform: translateX(26px);
        background-color: #ffffff;
        color: #333333;
    }

    .toggle-switch:hover .toggle-track {
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(style);

const checkbox = toggleButton.querySelector('input');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        enableDarkMode();
        toggleButton.querySelector('.toggle-icon').textContent = '☀️';
    } else {
        disableDarkMode();
        toggleButton.querySelector('.toggle-icon').textContent = '🌙';
    }
    isDarkMode = checkbox.checked;
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