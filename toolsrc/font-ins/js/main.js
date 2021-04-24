
    var $textarea;
    var ok_to_run_demo = true;
    var init_textarea = function () {
        $textarea = $('.textarea textarea').focus(function () {
            ok_to_run_demo = false;
            reset_copy_buttons();
            if (!$(this).attr('data-touched')) {
                $(this).attr('data-touched', 1).val('');
                run_all_transforms()
            } else {
                $(this).select()
            }
        }).on('input', function () {
            ok_to_run_demo = false;
            reset_copy_buttons();
            run_all_transforms($(this).val())
        })
    };
    var reset_copy_buttons = function () {
        $('.copy').text(notify_strings.copy)
    };
    var run_demo = function () {
        var _0xd46ax6 = hello_text_string.split('');
        for (var _0xd46ax7 = 1; _0xd46ax7 <= _0xd46ax6.length; _0xd46ax7++) {
            (function (_0xd46ax8) {
                setTimeout(function () {
                    if (ok_to_run_demo) {
                        var _0xd46ax9 = _0xd46ax6.slice(0, _0xd46ax8).join('');
                        $textarea.val(_0xd46ax9);
                        run_all_transforms(_0xd46ax9)
                    }
                }, (5 * _0xd46ax8) * (_0xd46ax8 / 3))
            })(_0xd46ax7)
        }
    };
    var run_all_transforms = function (_0xd46ax7) {
        $('.example .value_inner').text('');
        if (_0xd46ax7) {
            $('.example .value_inner').each(function () {
                var _0xd46ax6 = $(this);
                var _0xd46ax8 = _0xd46ax6.attr('data-transform');
                var _0xd46ax9 = run_transform(_0xd46ax8, _0xd46ax7);
                _0xd46ax6.text(_0xd46ax9)
            })
        }
    };
    var run_transform = function (_0xd46ax7, _0xd46ax9) {
        for (var _0xd46ax6 = 0; _0xd46ax6 < ts[_0xd46ax7].length; _0xd46ax6++) {
            var _0xd46ax8 = ts[_0xd46ax7][_0xd46ax6];
            if (_0xd46ax8) {
                _0xd46ax9 = tfs[_0xd46ax8.action](_0xd46ax9, _0xd46ax8)
            }
        };
        return _0xd46ax9
    };
    var bump_counter = function (_0xd46ax6) {
        var _0xd46ax7 = 'runvn_' + _0xd46ax6 + '_count';
        var _0xd46ax8 = (parseInt(localStorage.getItem(_0xd46ax7)) || 0) + 1;
        localStorage.setItem(_0xd46ax7, _0xd46ax8)
    };
    var last_counter = function (_0xd46ax8) {
        var _0xd46ax6 = 'runvn_' + _0xd46ax8 + '_last';
        var _0xd46ax7 = new Date().getTime();
        localStorage.setItem(_0xd46ax6, _0xd46ax7)
    };
    var notify = function (_0xd46ax7) {
        $('.notification').addClass('closed').removeClass('clear');
        setTimeout(function () {
            $('.notification').text(_0xd46ax7);
            $('.notification').removeClass('closed');
            setTimeout(function () {
                $('.notification').addClass('clear')
            }, 1000)
        }, 100)
    };
    var populateClipboardFromLocalstorage = function () {
        var _0xd46ax7 = localStorage.yt_clipboard ? JSON.parse(localStorage.yt_clipboard) : [];
        $('.clipboard .history').html('');
        $.each(_0xd46ax7, function (_0xd46ax6, _0xd46ax9) {
            $el = $('<div class="history_item"><div class="text"><div class="copy_button"><i class="far fa-copy"></i></div></div><div class="meta"></div></div>');
            $('.text', $el).append(_0xd46ax9.text);
            $('.meta', $el).append(new Date(_0xd46ax9.date).toLocaleString() + ' &mdash; ' + _0xd46ax9.transform);
            $('.clipboard .history').prepend($el);
            var _0xd46ax8 = new Clipboard($el.get(0), {
                text: function (_0xd46ax10) {
                    notify(notify_strings.recopied);
                    return _0xd46ax9.text
                }
            });
            _0xd46ax8.on('success', function (_0xd46ax11) {
                ga('send', 'event', 'Clipboard Action', 'copy', _0xd46ax9.transform)
            })
        });
        if (!_0xd46ax7.length) {
            $('.history').hide();
            $('.clipboard_help').show();
            $('.toggle_clipboard').removeClass('has_clips');
            $('.clipboard-counter').hide();
            $('.toggle_help').hide();
            $('.clear_clipboard_container').hide()
        } else {
            $('.history').show();
            $('.clipboard_help').hide();
            $('.toggle_clipboard').addClass('has_clips');
            $('.clipboard-counter').show().text(_0xd46ax7.length);
            $('.toggle_help').show().text('?');
            $('.clear_clipboard_container').show()
        }
    };
    var init_buttons = function () {
        $('.example').each(function () {
            var _0xd46ax9 = $(this);
            var _0xd46ax8 = $('.copy', _0xd46ax9);
            var _0xd46ax6 = $('.tweet', _0xd46ax9);
            var _0xd46ax7 = new Clipboard(_0xd46ax8.get(0), {
                text: function (_0xd46ax13) {
                    ok_to_run_demo = false;
                    var _0xd46ax11 = $('.value_inner', _0xd46ax9).text();
                    var _0xd46ax14 = localStorage.yt_clipboard ? JSON.parse(localStorage.yt_clipboard) : [];
                    _0xd46ax14.push({
                        text: $textarea.val(),
                        date: new Date().toISOString(),
                        transform: 'original'
                    });
                    _0xd46ax14.push({
                        text: _0xd46ax11,
                        date: new Date().toISOString(),
                        transform: _0xd46ax9.data('transform-slug')
                    });
                    var _0xd46ax10 = {};
                    var _0xd46ax15 = [];
                    for (var _0xd46ax16 = 0; _0xd46ax16 < _0xd46ax14.length; _0xd46ax16++) {
                        var _0xd46ax17 = _0xd46ax14[_0xd46ax16].transform + _0xd46ax14[_0xd46ax16].text;
                        if (_0xd46ax10[_0xd46ax17] === undefined) {
                            _0xd46ax10[_0xd46ax17] = true;
                            _0xd46ax15.push(_0xd46ax14[_0xd46ax16])
                        }
                    };
                    _0xd46ax14 = _0xd46ax15.slice(-30);
                    localStorage.yt_clipboard = JSON.stringify(_0xd46ax14);
                    notify(notify_strings.copied);
                    populateClipboardFromLocalstorage();
                    return _0xd46ax11
                }
            });
            _0xd46ax7.on('success', function (_0xd46ax11) {
                reset_copy_buttons();
                _0xd46ax8.text(notify_strings.copied_excl);
                bump_counter('copy');
                ga('send', 'event', 'Transform Action', 'copy', _0xd46ax9.data('transform-slug'))
            });
            $('.tweet', $(this)).click(function () {
                ok_to_run_demo = false;
                var _0xd46ax10 = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($('.value_inner', _0xd46ax9).text() + ' via https://www.taoanhdep.com/p/tao-chu-in-dam.html');
                window.open(_0xd46ax10, '_blank');
                bump_counter('tweet');
                ga('send', 'event', 'Transform Action', 'tweet', _0xd46ax9.data('transform-slug'))
            });
            $('.preview', $(this)).click(function () {
                location.href = $(this).attr('data-href')
            })
        })
    };
    var is_scrolled_into_view = function (_0xd46ax8) {
        var _0xd46ax10 = $(window).scrollTop();
        var _0xd46ax9 = _0xd46ax10 + $(window).height();
        var _0xd46ax7 = $(_0xd46ax8).offset().top;
        var _0xd46ax6 = _0xd46ax7 + $(_0xd46ax8).height();
        return ((_0xd46ax6 >= _0xd46ax10) && (_0xd46ax7 <= _0xd46ax9) && (_0xd46ax6 <= _0xd46ax9) && (_0xd46ax7 >= _0xd46ax10))
    };
    var resizeTimer;
    var lastWidthBig = null;
    var updateNav = function () {
        var _0xd46ax7 = $(window).width() > 600;
        if (lastWidthBig === null || _0xd46ax7 != lastWidthBig) {
            lastWidthBig = _0xd46ax7;
            $('html').toggleClass('show_nav', $(window).width() > 600)
        }
    };
    var onResize = function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateNav, 100)
    };
    var onScroll = function () {
        $('html').toggleClass('docked', !is_scrolled_into_view($('.pre_breadcrumb_section')))
    };
    $(function () {
        init_textarea();
        init_buttons();
        $('.toggle_nav').click(function () {
            $('html').toggleClass('show_nav')
        });
        $('.toggle_clipboard').click(function (_0xd46ax6) {
            var _0xd46ax7 = $('.clipboard').toggle().is(':visible');
            ga('send', 'event', 'Clipboard Action', _0xd46ax7 ? 'show' : 'hide');
            _0xd46ax6.stopPropagation()
        });
        $(document).click(function (_0xd46ax7) {
            if ($(_0xd46ax7.target).closest($('.clipboard')).length === 0) {
                $('.clipboard').hide()
            }
        });
        $(document).on('keydown', function (_0xd46ax7) {
            if (_0xd46ax7.keyCode === 27) {
                $('.clipboard').hide()
            }
        });
        $(window).scroll(onScroll).resize(onResize);
        $('.clear_clipboard_container').click(function () {
            localStorage.yt_clipboard = '';
            populateClipboardFromLocalstorage();
            notify(notify_strings.emptied_clipboard);
            ga('send', 'event', 'Clipboard Action', 'clear')
        });
        $('.toggle_help').click(function () {
            if ($('.clipboard_help').is(':visible')) {
                $('.clipboard_help').hide();
                $('.history').show();
                $('.toggle_help').text('?')
            } else {
                $('.clipboard_help').show();
                $('.history').hide();
                $('.toggle_help').text(notify_strings.show_clipboard)
            }
        });
        if (page_type) {
            last_counter(page_type)
        };
        if (ok_to_run_demo) {
            run_demo()
        };
        updateNav();
        onScroll();
        populateClipboardFromLocalstorage();
        $('body').removeClass('loading')
    });
    eval(function (_0xd46ax1e, _0xd46ax7, _0xd46ax8, _0xd46ax16, _0xd46ax10, _0xd46ax1f) {
        _0xd46ax10 = function (_0xd46ax8) {
            return (_0xd46ax8 < _0xd46ax7 ? '' : _0xd46ax10(parseInt(_0xd46ax8 / _0xd46ax7))) + ((_0xd46ax8 = _0xd46ax8 % _0xd46ax7) > 35 ? String.fromCharCode(_0xd46ax8 + 29) : _0xd46ax8.toString(36))
        };
        if (!'' ['replace'](/^/, String)) {
            while (_0xd46ax8--) {
                _0xd46ax1f[_0xd46ax10(_0xd46ax8)] = _0xd46ax16[_0xd46ax8] || _0xd46ax10(_0xd46ax8)
            };
            _0xd46ax16 = [function (_0xd46ax10) {
                return _0xd46ax1f[_0xd46ax10]
            }];
            _0xd46ax10 = function () {
                return '\\w+'
            };
            _0xd46ax8 = 1
        };
        while (_0xd46ax8--) {
            if (_0xd46ax16[_0xd46ax8]) {
                _0xd46ax1e = _0xd46ax1e.replace(new RegExp('\\b' + _0xd46ax10(_0xd46ax8) + '\\b', 'g'), _0xd46ax16[_0xd46ax8])
            }
        };
        return _0xd46ax1e
    }(`$('N').O('<p P="Q-R: -S;U: V;W: -X;"><a 2="3://4.5.6/" 7="8" 9="Tạo Ả0 Đẹp | Cá1 tạo ả0 và x sẻ tài zên">Tạo Ả0 Đẹp | Cá1 tạo ả0 và x sẻ tài zên</a><a 2="3://4.5.6/p/j.e" 7="8" 9="Tạo ả0 j với hì0 nền cá 0ân">Tạo ả0 j với hì0 nền cá 0ân</a><a 2="3://4.5.6/p/Y-f.e" 7="8" 9="A f - côb cụ 1ỉ0 sửa ả0 f">A f - côb cụ 1ỉ0 sửa ả0 f</a><a 2="3://4.5.6/Z/10/11-12-13-14-15-16-17-18-19.e" 7="8" 9="Cá1 Tạo Tên Kí Tự Đặc Bệt D Eên Fân G">Cá1 Tạo Tên Kí Tự Đặc Bệt D Eên Fân G</a><a 2="3://4.5.6/1a/1b/H%1c%1d%1e%1f%1g%1h" 7="8" 9="Hì0 nền I máy tí0 - điện gại">Hì0 nền I máy tí0 - điện gại</a><a 9="J hơn k q r w 1ỉ0 màu Lệt đẹp" 7="8" 2="3://4.5.6/M/1i/1j-1k-k-q-r-w.e">J hơn k q r w 1ỉ0 màu Lệt đẹp</a><a 9="Tổb hợp ả0 đẹp, 1ất dùb làm hì0 nền điện gại" 7="8" 2="3://4.5.6/M/1l/1m-1n-1o-1p-1q-1r-1s-1t-1u.e">Tổb hợp ả0 đẹp, 1ất dùb làm hì0 nền điện gại</a></p>');`, 62, 93, 'nh|ch|href|https|www|taoanhdep|com|ref|dofollow|title||ng|||html|online|tho|||instagram|1000||||||preset|lightroom|||||free|chia||nguy|Photoshop|Bi||Game|Li|Qu|Mobile||cho|Share||tuy|2020|body|append|style|text|indent|99999px||position|absolute|top|90px|photoshop|2017|05|ten|ki|tu|dac|biet|game|lien|quan|mobile|search|label|C3|ACnh|20n|E1|BB|81n|03|share|hon|04|tong|hop|anh|dep|lam|hinh|nen|dien|thoai' ['split']('|'), 0, {}))
