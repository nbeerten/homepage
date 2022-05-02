var theme = {
    set: function (theme) {
        var root = document.documentElement;
        switch (theme) {
            case 'dark':
                root.setAttribute('theme', 'dark');
                break;
            case 'light':
                root.setAttribute('theme', 'light');
                break;
            default:
                root.setAttribute('theme', 'dark');
                break;
        }
    },
    getPreferred: function () {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            } else {
                return 'dark';
            }
        }
        return null;
    },
    cookie: {
        cookiename: 'theme',
        get: function () {
            return document.cookie.match('(^|;)\\s*' + this.cookiename + '\\s*=\\s*([^;]+)')?.pop() || null;
        },
        set: function(theme) {
            let expDays = 90;
            let name = this.cookiename;
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 86400000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = this.cookiename + "=" + theme + "; " + expires + "; path=/";
        }
    },
    toggle: function(){
        var root = document.documentElement;
        if(root.getAttribute('theme') === 'dark'){
            root.setAttribute('theme', 'light')
            this.cookie.set('light')
        } else if(root.getAttribute('theme') === 'light') {
            root.setAttribute('theme', 'dark')
            this.cookie.set('dark')
        } else {
            root.setAttribute('theme', 'dark')
            this.cookie.set('dark')
        }
    }
}

if (theme.cookie.get() !== null) {
    theme.set(theme.cookie.get());
} else if (theme.getPreferred() !== null) {
    theme.set(theme.getPreferred());

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        let event_theme = event.matches ? "dark" : "light";
        theme.set(event_theme);
    });
}