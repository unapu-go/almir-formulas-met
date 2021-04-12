$(function () {
    function places (v) {
        return v ? Math.ceil(Math.round(v*10000)/10)/1000 : v;
    }

    (function() {
        const $el = $('#umAbs'),
            $tmp = $el.find('input:eq(0)'),
            $ur = $el.find('input:eq(1)'),
            $res = $el.find('pre'),
            calc = function () {
                let tmp = parseFloat($tmp.val() || 0),
                    ur = parseFloat($ur.val() || 0),
                    res = (6.112*Math.pow(2.71828, (17.67*tmp)/(tmp+243.5))*ur*2.1674)/(273.15+tmp);
                $res.html(places(res))
            };

        $el.find('a').click(calc);
        $el.find('form').submit(function (e) {
            e.preventDefault();
            calc();
        })
    })();

    (function() {
        const $el = $('#ic'),
            $tmp = $el.find('input:eq(0)'),
            $ur = $el.find('input:eq(1)'),
            $dt = $el.find('pre:eq(0)'),
            $tpo = $el.find('pre:eq(1)'),
            calc = function () {
                let tmp = parseFloat($tmp.val() || 0),
                    ur = parseFloat($ur.val() || 0),
                    dt = (tmp-(0.55/100)*(1-ur)*(tmp-14)),
                    tpo = Math.pow(ur/100,1/8)*(112+0.9*tmp)+(0.1*tmp-112);
                $dt.html(places(dt));
                $tpo.html(places(tpo))
            };

        $el.find('a').click(calc);
        $el.find('form').submit(function (e) {
            e.preventDefault();
            calc();
        })
    })();

    (function() {
        const $el = $('#f2c'),
            $f = $el.find('input:eq(0)'),
            $c = $el.find('input:eq(1)'),
            $rc = $el.find('pre:eq(0)'),
            $rf = $el.find('pre:eq(1)'),
            calc = function () {
                let fv = $f.val(),
                    cv = $c.val();

                $rc.html(places((5/9)*(-32)));
                $rf.html(places((9/5)*parseFloat(cv || 0)+32))
            };

        $el.find('a').click(calc);
        $el.find('form').submit(function (e) {
            e.preventDefault();
            calc();
        })
    })();

    (function() {
        const $el = $('#f2k'),
            $f = $el.find('input:eq(0)'),
            $k = $el.find('input:eq(1)'),
            $rk = $el.find('pre:eq(0)'),
            $rf = $el.find('pre:eq(1)'),
            calc = function () {
                let fv = $f.val(),
                    kv = $k.val();

                $rk.html(places(5/9*(parseFloat(fv || 0)-32)+273.16));
                $rf.html(places((9/5)*(parseFloat(kv || 0)-273.15)+32))
            };

        $el.find('a').click(calc);
        $el.find('form').submit(function (e) {
            e.preventDefault();
            calc();
        })
    })();
})